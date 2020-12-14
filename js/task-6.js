const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProdcuts, productName) {
  
    for (let i = 0; allProdcuts.length > i; i++) {
        let tempObject = allProdcuts[i];
         if (tempObject.name === productName){
            let totalСost = tempObject.price*tempObject.quantity
            return(totalСost);
        }
      
    }

};


console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800