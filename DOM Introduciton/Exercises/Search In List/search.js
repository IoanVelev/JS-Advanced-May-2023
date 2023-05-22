function search() {
   let listOfTowns = document.querySelectorAll('#towns li');
   let userInput = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matches = 0;
   for (let town of listOfTowns) {
      if (town.textContent.includes(userInput)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      } else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none'
      }
   }
   result.textContent = `${matches} matches found`
}
