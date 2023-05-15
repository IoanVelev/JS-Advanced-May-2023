function townPopulation(data) {
  let townsPopulationInfo = {};
  for (let line of data) {
    line = line.split(" <-> ");
    let name = line[0];
    let population = Number(line[1]);
    if (!townsPopulationInfo.hasOwnProperty(name)) {
      townsPopulationInfo[name] = population;
    } else {
      townsPopulationInfo[name] += population;
    }
  }
  for (let key in townsPopulationInfo) {
    console.log(`${key} : ${townsPopulationInfo[key]}`);
  }
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
