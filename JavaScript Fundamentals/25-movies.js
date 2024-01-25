function solve(commands) {
    'use strict';

    const movies = [];

    for (const command of commands) {
        if (command.includes('addMovie')) {
            const movieName = command.replace('addMovie ', '');
            movies.push({
                name: movieName,
                director: '',
                date: '',
            });
        } else if (command.includes('directedBy')) {
            const movieName = command.substring(0, command.indexOf('directedBy')).trim();
            const directedBy = command.substring(command.indexOf('directedBy') + 'directedBy'.length).trim();

            const result = movies.find(movie => movie.name === movieName);

            if (!result) {
                // movies.push({
                //     name: movieName,
                //     date: '',
                //     director: directedBy,
                // });
            } else {
                result.director = directedBy;
            }
        } else if (command.includes('onDate')) {
            const movieName = command.substring(0, command.indexOf('onDate')).trim();
            const onDate = command.substring(command.indexOf('onDate') + 'onDate'.length).trim();

            const result = movies.find(movie => movie.name === movieName);
            if (!result) {
                // movies.push({
                //     name: movieName,
                //     date: onDate,
                //     director: '',
                // });
            } else {
                result.date = onDate;
            }
        }
    }

    movies
      .filter(movie => movie.date && movie.director && movie.name)
      .forEach(movie => console.log(JSON.stringify(movie)));
}

const commands = [
    'addMovie Movie1',
    'directedBy Movie1 directedByDirector1',
    'onDate Movie1 onDate2022-01-25',
    'addMovie Movie2',
    'onDate Movie2 onDate2022-01-26',
];

solve(commands);



    