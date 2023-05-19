function townsToJSON(input) {
  let copyArr = [...input];
  copyArr = copyArr.join(" ").split("| ");
  let columns = copyArr.splice(1, 4);
  let output = [];
  let obj = {};
  let arr = [];
  for (let el of copyArr) {
    if (el !== "") {
      let Town = columns[0].trim();
      let Latitude = columns[1].trim();
      let Longitude = columns[2].trim();
      el = el.split(" |");
      el = el[0].trim();
      if (arr.length < 3) {
        arr.push(el);
        if (arr.length == 3) {
          obj[Town] = arr[0];
          obj[Latitude] = Number(Number(arr[1]).toFixed(2));
          obj[Longitude] = Number(Number(arr[2]).toFixed(2));
          let cloneObj = { ...obj };
          output.push(cloneObj);
          arr = [];
        }
      }
    }
  }
  console.log(JSON.stringify(output));
}

