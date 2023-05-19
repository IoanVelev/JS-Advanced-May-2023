function rectangle(width, height, color) {
  let obj = {
    width,
    height,
    color: 
        color.substring(0,1).toUpperCase() + color.substring(1),
    calcArea: function () {
      return width * height;
    },
  };
  return obj;
}

