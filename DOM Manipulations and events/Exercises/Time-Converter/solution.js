function attachEventsListeners() {
  let daysInput = document.getElementById("days");
  let hoursInput = document.getElementById("hours");
  let minutesInput = document.getElementById("minutes");
  let secondsInput = document.getElementById("seconds");

  let initialConvertValues = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };
  document.getElementById("daysBtn").addEventListener("click", onConvert);
  document.getElementById("hoursBtn").addEventListener("click", onConvert);
  document.getElementById("minutesBtn").addEventListener("click", onConvert);
  document.getElementById("secondsBtn").addEventListener("click", onConvert);

  function convert(selectedTime, value) {
    let time = value / initialConvertValues[selectedTime];
    return {
      days: time,
      hours: time * initialConvertValues.hours,
      minutes: time * initialConvertValues.minutes,
      seconds: time * initialConvertValues.seconds,
    };
  }
  function onConvert(event) {
    let input = event.target.parentElement.querySelector('input[type="text"]');
    let time = convert(input.id, Number(input.value));
    daysInput.value = time.days;
    hoursInput.value = time.hours;
    minutesInput.value = time.minutes;
    secondsInput.value = time.seconds;
  }
}
