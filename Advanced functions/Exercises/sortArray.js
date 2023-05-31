function sortArray(arr, order) {
  if (order === "asc") {
    arr = arr.sort((a, b) => a - b);
  } else {
    arr = arr.sort((a, b) => b - a);
  }
  return arr;
}

