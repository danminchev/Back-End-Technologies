function printObjectProperties(cityObject) {
    for (const key in cityObject) {
      console.log(`${key} -> ${cityObject[key]}`);
    }
  }
  
  // Example usage:
  const sofia = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
  };
  
  const plovdiv = {
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
  };
  
  // Print properties of Sofia
  printObjectProperties(sofia);
  
  // Print properties of Plovdiv
  printObjectProperties(plovdiv);
  