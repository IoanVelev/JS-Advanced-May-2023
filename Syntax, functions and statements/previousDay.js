function previousDay(year, month, day) {
  let date = new Date(year, month, day);
  if (day === 1) {
    date = new Date(year, month - 1);
    let day = new Date(year, month - 1, 0).getDate();
    console.log(`${date.getFullYear()}-${date.getMonth()}-${day}`);
  } else {
    console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate() - 1}`);
  }
}
previousDay(2016, 9, 30);
