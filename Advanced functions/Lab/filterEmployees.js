function filterEmployees(data, criteria) {
  let parsedInput = JSON.parse(data);
  let [key, value] = criteria.split("-");
  let obj = {};
  for (let currentObj of parsedInput) {
    if (key === "all") {
      let fullName = `${currentObj.first_name} ${currentObj.last_name}`;
      let email = currentObj.email;
      obj[fullName] = email;
    } else if (currentObj[key] === value) {
      let fullName = `${currentObj.first_name} ${currentObj.last_name}`;
      let email = currentObj.email;
      obj[fullName] = email;
    }
  }
  function printEmployees() {
    let keys = Object.keys(obj);
    let index = 0;
    for (let key of keys) {
      console.log(`${index}. ${key} - ${obj[key]}`);
      index += 1;
    }
  }
  printEmployees(obj);
}

