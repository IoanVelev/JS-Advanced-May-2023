function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let rows = document.querySelectorAll('tbody tr');
   function onClick() {
      let inputValue = document.getElementById('searchField').value;
      for (let currentRow of rows) {
        if (currentRow.textContent.includes(inputValue)) {
         currentRow.classList.add('select');
        } else{
         currentRow.classList.remove('select');
        }
      }
   }
}