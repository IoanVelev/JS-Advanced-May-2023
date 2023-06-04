function notify(message) {
  let messageNotification = document.getElementById("notification");
  messageNotification.innerText = message;
  messageNotification.style.display = "block";
  messageNotification.addEventListener("click", (event) => {
    event.target.style.display = "none";
  });
}
