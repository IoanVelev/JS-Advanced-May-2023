function solve() {
   let addButtons = document.querySelectorAll('.product .product-add .add-product');
   let textAreaOutput = document.querySelector('textarea');
   let checkOutButton = document.querySelector('.shopping-cart .checkout');
   let arrAddButtons = Array.from(addButtons);
   let list = [];
   let totalPrice = 0;
   for (let index = 0; index < arrAddButtons.length; index++) {
      let currentButton = arrAddButtons[index];
      currentButton.addEventListener('click', () => {
         let product = document.querySelectorAll('.product .product-title')[index].textContent;
         let price = Number(document.querySelectorAll('.product .product-line-price')[index].textContent);
         totalPrice += price;
         if (!list.includes(product)) {
            list.push(product);
         }
         textAreaOutput.textContent += `Added ${product} for ${price.toFixed(2)} to the cart.\n`
      })
   }
   checkOutButton.addEventListener('click', () => {
      list = list.join(', ');
      textAreaOutput.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`
   })
}