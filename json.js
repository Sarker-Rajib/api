// const user = { id: 1, name: 'namaye', address: 'addresses' };
// // JavaScript Object notation
// const stringify = JSON.stringify(user);
// console.log(stringify);

const shop = { 
   owner: 'Alia',
   address: {
      atreet: 'Voot er Goli',
      city: 'dhaka',
      country: 'Bangladesh',
   },
   product: ['laptop', 'mic', 'monitor', 'keyboard'],
   revenue: 4500,
   isOpen: true,
   isNew: false,
}

const store = JSON.stringify(shop);
console.log(store);

const stringToObj = JSON.parse(store);
console.log(stringToObj);