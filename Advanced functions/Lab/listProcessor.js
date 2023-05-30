function listProcessor(list) {
  let arr = [];
  function add(string) {
    arr.push(string);
  }
  function remove(string) {
    arr = arr.filter((x) => x !== string);
  }
  for (let line of list) {
    let [cmd, string] = line.split(" ");
    switch (cmd) {
      case "add":
        add(string);
        break;
      case "remove":
        remove(string);
        break;
      case "print":
        console.log(arr.join(","));
    }
  }
}
