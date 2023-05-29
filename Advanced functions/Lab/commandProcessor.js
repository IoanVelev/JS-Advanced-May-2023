function solution() {
  let output = "";
  let obj = {
    append: function (string) {
      output += string;
    },
    removeStart: function (num) {
      output = output.slice(num, output.length);
    },
    removeEnd: function (num) {
      output = output.slice(0, output.length - num);
    },
    print: function () {
      console.log(output);
    },
  };
  return obj;
}

