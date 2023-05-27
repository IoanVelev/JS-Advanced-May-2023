function create(words) {
   let div1 = document.getElementById('content');
   for (let word of words) {
      let div2 = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div2.appendChild(p);
      div2.addEventListener('click', () => {
         p.style.display = 'block'
      })
      div1.appendChild(div2)
   }
}