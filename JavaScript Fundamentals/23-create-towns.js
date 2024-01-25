function parseTable(input) {
    for (const row of input) {
        const [town, latitude, longitude] = row.split(' | ');
        
        const formattedLatitude = parseFloat(latitude).toFixed(2);
        const formattedLongitude = parseFloat(longitude).toFixed(2);
        
        const result = {
            town: town,
            latitude: formattedLatitude,
            longitude: formattedLongitude
        };

        console.log(result);
    }
}