using MongoDB.Driver;
using MoviesLibraryAPI.Controllers;
using MoviesLibraryAPI.Controllers.Contracts;
using MoviesLibraryAPI.Data.Models;
using MoviesLibraryAPI.Services;
using MoviesLibraryAPI.Services.Contracts;
using System.ComponentModel.DataAnnotations;

namespace MoviesLibraryAPI.XUnitTests
{
    public class XUnitIntegrationTests : IClassFixture<DatabaseFixture>
    {
        private readonly MoviesLibraryXUnitTestDbContext _dbContext;
        private readonly IMoviesLibraryController _controller;
        private readonly IMoviesRepository _repository;

        public XUnitIntegrationTests(DatabaseFixture fixture)
        {
            _dbContext = fixture.DbContext;
            _repository = new MoviesRepository(_dbContext.Movies);
            _controller = new MoviesLibraryController(_repository);

            InitializeDatabaseAsync().GetAwaiter().GetResult();
        }

        private async Task InitializeDatabaseAsync()
        {
            await _dbContext.ClearDatabaseAsync();
        }

        [Fact]
        public async Task AddMovieAsync_WhenValidMovieProvided_ShouldAddToDatabase()
        {
            // Arrange
            var movie = new Movie
            {
                Title = "Test Movie",
                Director = "Test Director",
                YearReleased = 2022,
                Genre = "Action",
                Duration = 120,
                Rating = 7.5
            };

            // Act
            await _controller.AddAsync(movie);

            // Assert
            var resultMovie = await _dbContext.Movies.Find(m => m.Title == "Test Movie").FirstOrDefaultAsync();
            Xunit.Assert.NotNull(resultMovie);
            Xunit.Assert.Equal("Test Movie", resultMovie.Title);
            Xunit.Assert.Equal("Test Director", resultMovie.Director);
            Xunit.Assert.Equal(2022, resultMovie.YearReleased);
            Xunit.Assert.Equal("Action", resultMovie.Genre);
            Xunit.Assert.Equal(120, resultMovie.Duration);
            Xunit.Assert.Equal(7.5, resultMovie.Rating);
        }

        [Fact]
        public async Task AddMovieAsync_WhenInvalidMovieProvided_ShouldThrowValidationException()
        {
            // Arrange
            var invalidMovie = new Movie { };

            // Act and Assert
            await Assert.ThrowsAsync<ValidationException>(async () => await _controller.AddAsync(invalidMovie));
        }

        [Fact]
        public async Task DeleteAsync_WhenValidTitleProvided_ShouldDeleteMovie()
        {
            // Arrange
            var movie = new Movie
            {
                Title = "MovieToDelete",
                Director = "Director",
                YearReleased = 2020,
                Genre = "Genre",
                Duration = 120,
                Rating = 7.0
            };
            await _controller.AddAsync(movie);

            // Act
            await _controller.DeleteAsync(movie.Title);

            // Assert
            var resultMovie = await _dbContext.Movies.Find(m => m.Title == movie.Title).FirstOrDefaultAsync();
            Assert.Null(resultMovie);
        }


        [Fact]
        public async Task DeleteAsync_WhenTitleIsNull_ShouldThrowArgumentException()
        {
            // Arrange & Act & Assert
            await Assert.ThrowsAsync<ArgumentException>(async () => await _controller.DeleteAsync(null));
        }

        [Fact]
        public async Task DeleteAsync_WhenTitleIsEmpty_ShouldThrowArgumentException()
        {
            // Arrange & Act & Assert
            await Assert.ThrowsAsync<ArgumentException>(async () => await _controller.DeleteAsync(""));
        }

        [Fact]
        public async Task DeleteAsync_WhenTitleDoesNotExist_ShouldThrowInvalidOperationException()
        {
            // Arrange & Act & Assert
            await Assert.ThrowsAsync<InvalidOperationException>(async () => await _controller.DeleteAsync("NonExistingTitle"));
        }

        [Fact]
        public async Task GetAllAsync_WhenNoMoviesExist_ShouldReturnEmptyList()
        {
            // Act
    var result = await _controller.GetAllAsync();

    // Assert
    Assert.Empty(result);
        }

        [Fact]
        public async Task GetAllAsync_WhenMoviesExist_ShouldReturnAllMovies()
        {
            // Arrange
            var movie1 = new Movie
            {
                Title = "Movie1",
                Director = "Director1",
                YearReleased = 2020,
                Genre = "Genre1",
                Duration = 120,
                Rating = 7.0
            };
            var movie2 = new Movie
            {
                Title = "Movie2",
                Director = "Director2",
                YearReleased = 2021,
                Genre = "Genre2",
                Duration = 130,
                Rating = 7.5
            };
            await _controller.AddAsync(movie1);
            await _controller.AddAsync(movie2);

            // Act
            var result = await _controller.GetAllAsync();

            // Assert
            Assert.Equal(2, result.Count());
            Assert.Contains(result, m => m.Title == movie1.Title);
            Assert.Contains(result, m => m.Title == movie2.Title);
        }

        [Fact]
        public async Task GetByTitle_WhenTitleExists_ShouldReturnMatchingMovie()
        {
            // Arrange
            var movie = new Movie
            {
                Title = "ExistingMovie",
                Director = "Director",
                YearReleased = 2020,
                Genre = "Genre",
                Duration = 120,
                Rating = 7.0
            };
            await _controller.AddAsync(movie);

            // Act
            var resultMovie = await _controller.GetByTitle("ExistingMovie");

            // Assert
            Assert.NotNull(resultMovie);
            Assert.Equal(movie.Title, resultMovie.Title);
        }

        [Fact]
        public async Task GetByTitle_WhenTitleDoesNotExist_ShouldReturnNull()
        {
            // Act
            var resultMovie = await _controller.GetByTitle("NonExistingTitle");

            // Assert
            Assert.Null(resultMovie);
        }


        [Fact]
        public async Task SearchByTitleFragmentAsync_WhenTitleFragmentExists_ShouldReturnMatchingMovies()
        {
            // Arrange
            var movie1 = new Movie
            {
                Title = "TestMovie1",
                Director = "Director1",
                YearReleased = 2020,
                Genre = "Genre1",
                Duration = 120,
                Rating = 7.0
            };
            var movie2 = new Movie
            {
                Title = "TestMovie2",
                Director = "Director2",
                YearReleased = 2021,
                Genre = "Genre2",
                Duration = 130,
                Rating = 7.5
            };
            await _controller.AddAsync(movie1);
            await _controller.AddAsync(movie2);

            // Act
            var resultMovies = await _controller.SearchByTitleFragmentAsync("Test");

            // Assert
            Assert.NotEmpty(resultMovies);
            Assert.Contains(resultMovies, m => m.Title == movie1.Title);
            Assert.Contains(resultMovies, m => m.Title == movie2.Title);
        }

        [Fact]
        public async Task SearchByTitleFragmentAsync_WhenNoMatchingTitleFragment_ShouldThrowKeyNotFoundException()
        {
            // Act and Assert
            await Assert.ThrowsAsync<KeyNotFoundException>(async () => await _controller.SearchByTitleFragmentAsync("NonExistingTitleFragment"));
        }

        [Fact]
        public async Task UpdateAsync_WhenValidMovieProvided_ShouldUpdateMovie()
        {
            // Arrange
            var movie = new Movie
            {
                Title = "MovieToUpdate",
                Director = "Director",
                YearReleased = 2020,
                Genre = "Genre",
                Duration = 120,
                Rating = 7.0
            };
            await _controller.AddAsync(movie);

            // Modify the movie
            movie.Director = "UpdatedDirector";
            movie.YearReleased = 2021;

            // Act
            await _controller.UpdateAsync(movie);
            var updatedMovie = await _controller.GetByTitle("MovieToUpdate");

            // Assert
            Assert.Equal("UpdatedDirector", updatedMovie.Director);
            Assert.Equal(2021, updatedMovie.YearReleased);
        }

        [Fact]
        public async Task UpdateAsync_WhenInvalidMovieProvided_ShouldThrowValidationException()
        {
            // Arrange
            var invalidMovie = new Movie
            {
                // Provide an invalid movie object, e.g., without a title or other required fields
            };

            // Act and Assert
            await Assert.ThrowsAsync<ValidationException>(async () => await _controller.UpdateAsync(invalidMovie));
        }
    }
}
