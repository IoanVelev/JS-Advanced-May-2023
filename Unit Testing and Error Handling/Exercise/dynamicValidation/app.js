function validate() {
  let input = document.getElementById("email").addEventListener('change', onChange);
  function onChange(event) {
    const regex = /[a-z]+@[a-z]+\.[a-z]+/gm;
        if (regex.test(event.target.value)) {
            event.target.classList.remove('error')
        } else{
            event.target.classList.add('error')
        }
  }
}
