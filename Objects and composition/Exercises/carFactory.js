function carFactory(obj) {
  let output = {};
  output.model = obj.model;
  if (obj.power <= 90) {
    output.engine = { power: 90, volume: 1800 };
  } else if (obj.power <= 120) {
    output.engine = { power: 120, volume: 2400 };
  } else if (obj.power <= 200) {
    output.engine = { power: 200, volume: 3500 };
  }
  output.carriage = { type: obj.carriage, color: obj.color };
  let arr = [0, 0, 0, 0];
  if (obj.wheelsize % 2 == 0) {
    output.wheels = arr.fill(obj.wheelsize - 1, 0, 4);
  } else {
    output.wheels = arr.fill(obj.wheelsize, 0, 4);
  }
  return output;
}

