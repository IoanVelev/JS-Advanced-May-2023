function factory(library, orders){
    let products = [];
    for (let currentOrder of orders) {
       let product = currentOrder.template;
       
       for (let currentPart of currentOrder.parts) {
        product[currentPart] = library[currentPart];
       }
       products.push(product);
    }
   return products;
}

