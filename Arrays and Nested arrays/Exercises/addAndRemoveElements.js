function addAndRemoveElements(input) {
  let arr = [];
  for (let index = 0; index < input.length; index++) {
    let cmd = input[index];
    switch (cmd) {
      case "add":
        arr.push(index + 1);
        break;
      case "remove":
        arr.pop();
        break;
    }
  }
  if (arr.length < 1) {
    console.log("Empty");
  }
  arr.map((x) => console.log(x));
}
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
