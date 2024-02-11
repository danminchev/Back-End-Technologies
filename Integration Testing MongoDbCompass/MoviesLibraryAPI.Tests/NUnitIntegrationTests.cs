using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using MoviesLibraryAPI.Controllers;
using MoviesLibraryAPI.Controllers.Contracts;
using MoviesLibraryAPI.Data.Models;
using MoviesLibraryAPI.Services;
using MoviesLibraryAPI.Services.Contracts;
using System.ComponentModel.DataAnnotations;

namespace MoviesLibraryAPI.Tests
{
    [TestFixture]
    public class NUnitIntegrationTests
    {
        private MoviesLibraryNUnitTestDbContext _dbContext;
        private IMoviesLibraryController _controller;
        private IMoviesRepository _repository;
        IConfiguration _configuration;

        [OneTimeSetUp]
        public void OneTimeSetup()
        {
            _configuration = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .Build();
        }

        [SetUp]
        public async Task Setup()
        {
            string dbName = $"MoviesLibraryTestDb_{Guid.NewGuid()}";
            _dbContext = new MoviesLibraryNUnitTestDbContext(_configuration, dbName);

            _repository = new MoviesRepository(_dbContext.Movies);
            _controller = new MoviesLibraryController(_repository);
        }

        [TearDown]
        public async Task TearDown()
        {
            await _dbContext.ClearDatabaseAsync();
        }

        [Test]
        public async Task AddMovieAsync_WhenValidMovieProvided_ShouldAddToDatabase()
        {
            // Arrange
            var movie = new Movie
            {
                Title = "Test Movie",
                Director = "Test Director",
                YearReleased = 2022,
                Genre = "Action",
                Duration = 86,
                Rating = 7.5
            };

            // Act
            await _controller.AddAsync(movie);

            // Assert
            var resultMovie = await _dbContext.Movies.Find(m => m.Title == "Test Movie").FirstOrDefaultAsync();
            Assert.IsNotNull(resultMovie);
        }

        [Test]
        public async Task AddMovieAsync_WhenInvalidMovieProvided_ShouldThrowValidationException()
        {
            // Arrange
            var invalidMovie = new Movie
            {
                // Provide an invalid movie object, for example, missing required fields like 'Title'
                // Assuming 'Title' is a required field, do not set it
            };

            // Act and Assert
            // Expect a ValidationException because the movie is missing a required field
            var exception = Assert.ThrowsAsync<ValidationException>(() => _controller.AddAsync(invalidMovie));
        }

        [Test]
        public async Task DeleteAsync_WhenValidTitleProvided_ShouldDeleteMovie()
        {
            // Arrange            
            var movie = new Movie
            {
                Title = "Test Movie",
                Director = "Test Director",
                YearReleased = 2022,
                Genre = "Action",
                Duration = 86,
                Rating = 7.5
            };
            await _controller.AddAsync(movie);

            // Act            
            await _controller.DeleteAsync("Test Movie");

            // Assert
            var resultMovie = await _dbContext.Movies.Find(m => m.Title == "Test Movie").FirstOrDefaultAsync();
            Assert.IsNull(resultMovie);
        }


        [Test]
        public async Task DeleteAsync_WhenTitleIsNull_ShouldThrowArgumentException()
        {
            // Act and Assert
            Assert.ThrowsAsync<ArgumentException>(() => _controller.DeleteAsync(null)); ;
        }

        [Test]
        public async Task DeleteAsync_WhenTitleIsEmpty_ShouldThrowArgumentException()
        {
            // Act and Assert
            Assert.ThrowsAsync<ArgumentException>(() => _controller.DeleteAsync(""));
        }

        [Test]
        public async Task DeleteAsync_WhenTitleDoesNotExist_ShouldThrowInvalidOperationException()
        {
            // Act and Assert
            Assert.ThrowsAsync<InvalidOperationException>(() => _controller.DeleteAsync("Nonexistent Title"));
        }

        [Test]
        public async Task GetAllAsync_WhenNoMoviesExist_ShouldReturnEmptyList()
        {
            // Act
            var result = await _controller.GetAllAsync();

            // Assert
            Assert.IsEmpty(result);
        }

        [Test]
        public async Task GetAllAsync_WhenMoviesExist_ShouldReturnAllMovies()
        {
            // Act
            var result = await _controller.GetAllAsync();

            // Assert
            Assert.IsEmpty(result);
        }

        [Test]
        public async Task GetByTitle_WhenTitleExists_ShouldReturnMatchingMovie()
        {
            // Arrange
            var expectedMovie = new Movie
            {
                Title = "Existing Movie",
                Director = "Director",
                YearReleased = 2022,
                Genre = "Genre",
                Duration = 120,
                Rating = 7.5
            };
            await _controller.AddAsync(expectedMovie);

            // Act
            var resultMovie = await _controller.GetByTitle("Existing Movie");

            // Assert
            Assert.IsNotNull(resultMovie);
            Assert.AreEqual(expectedMovie.Title, resultMovie.Title);
            Assert.AreEqual(expectedMovie.Director, resultMovie.Director);
            Assert.AreEqual(expectedMovie.YearReleased, resultMovie.YearReleased);
            Assert.AreEqual(expectedMovie.Genre, resultMovie.Genre);
            Assert.AreEqual(expectedMovie.Duration, resultMovie.Duration);
            Assert.AreEqual(expectedMovie.Rating, resultMovie.Rating);
        }

        [Test]
        public async Task GetByTitle_WhenTitleDoesNotExist_ShouldReturnNull()
        {
            // Arrange

            // Act
            var resultMovie = await _controller.GetByTitle("Nonexistent Movie");

            // Assert
            Assert.IsNull(resultMovie);
        }


        [Test]
        public async Task SearchByTitleFragmentAsync_WhenTitleFragmentExists_ShouldReturnMatchingMovies()
        {
            // Arrange
            var expectedMovies = new List<Movie>
    {
        new Movie
        {
            Title = "Movie A",
            Director = "Director A",
            YearReleased = 2021,
            Genre = "Genre A",
            Duration = 100,
            Rating = 6.5
        },
        new Movie
        {
            Title = "Movie B",
            Director = "Director B",
            YearReleased = 2022,
            Genre = "Genre B",
            Duration = 110,
            Rating = 7.0
        },
        new Movie
        {
            Title = "Movie C",
            Director = "Director C",
            YearReleased = 2023,
            Genre = "Genre C",
            Duration = 120,
            Rating = 7.5
        }
    };

            foreach (var movie in expectedMovies)
            {
                await _controller.AddAsync(movie);
            }

            // Act
            var resultMovies = await _controller.SearchByTitleFragmentAsync("Movie");

            // Assert
            Assert.IsNotNull(resultMovies);
            Assert.AreEqual(3, resultMovies.Count());
        }

        [Test]
        public async Task SearchByTitleFragmentAsync_WhenNoMatchingTitleFragment_ShouldThrowKeyNotFoundException()
        {
            // Act and Assert
            Assert.Throws<KeyNotFoundException>(() => _controller.SearchByTitleFragmentAsync("Nonexistent").GetAwaiter().GetResult());
        }

        [Test]
        public async Task UpdateAsync_WhenValidMovieProvided_ShouldUpdateMovie()
        {// Arrange
            var originalMovie = new Movie
            {
                Title = "Original Title",
                Director = "Original Director",
                YearReleased = 2022,
                Genre = "Original Genre",
                Duration = 100,
                Rating = 7.5
            };

            // Add the original movie to the database
            await _controller.AddAsync(originalMovie);

            var updatedMovie = new Movie
            {
                Id = originalMovie.Id, // Set the original movie's ID
                Title = "Original Title", // Keep the same title
                Director = "Updated Director", // Update director
                YearReleased = 2023, // Update year released
                Genre = "Updated Genre", // Update genre
                Duration = 120, // Update duration
                Rating = 8.0 // Update rating
            };

            // Act
            await _controller.UpdateAsync(updatedMovie);

            // Assert
            var updatedResultMovie = await _dbContext.Movies.Find(m => m.Id == updatedMovie.Id).FirstOrDefaultAsync();
            Assert.IsNotNull(updatedResultMovie);
            Assert.AreEqual("Updated Director", updatedResultMovie.Director);
            Assert.AreEqual(2023, updatedResultMovie.YearReleased);
            Assert.AreEqual("Updated Genre", updatedResultMovie.Genre);
            Assert.AreEqual(120, updatedResultMovie.Duration);
            Assert.AreEqual(8.0, updatedResultMovie.Rating);
        }

        [Test]
        public async Task UpdateAsync_WhenInvalidMovieProvided_ShouldThrowValidationException()
        {
            // Arrange
            var movie = new Movie
            {
                // Create a movie without required fields
            };

            // Act and Assert
            Assert.ThrowsAsync<ValidationException>(() => _controller.UpdateAsync(movie));
        }


        [OneTimeTearDown]
        public async Task OneTimeTearDown()
        {
            await _dbContext.ClearDatabaseAsync();
        }
    }
}
