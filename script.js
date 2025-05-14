const products = [
  {
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    price: 10.9,
    quantity: 3,
    shipping: 0.0,
  },
  {
    name: "Intermediate Size Basketball",
    price: 20.95,
    quantity: 1,
    shipping: 4.99,
  },
  {
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    price: 7.99,
    quantity: 3,
    shipping: 0.0,
  },
  {
    name: "Plain Hooded Fleece Sweatshirt",
    price: 24.0,
    quantity: 1,
    shipping: 4.99,
  },
  {
    name: "Waterproof Knit Athletic Sneakers - Gray",
    price: 33.9,
    quantity: 1,
    shipping: 9.99,
  },
  {
    name: "Round Sunglasses",
    price: 15.6,
    quantity: 1,
    shipping: 4.99,
  },
  {
    name: "Luxury Towel Set - Graphite Gray",
    price: 35.99,
    quantity: 3,
    shipping: 9.99,
  },
  {
    name: "Men's Slim-Fit Summer Shorts",
    price: 16.99,
    quantity: 1,
    shipping: 4.99,
  },
  {
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    price: 15.99,
    quantity: 1,
    shipping: 4.99,
  },
  {
    name: "Women's Knit Ballet Flat",
    price: 26.4,
    quantity: 1,
    shipping: 9.99,
  },
  {
    name: "Women's Chunky Cable Beanie - Gray",
    price: 12.5,
    quantity: 1,
    shipping: 0.0,
  },
  {
    name: "Men's Classic-fit Pleated Chino Pants",
    price: 22.9,
    quantity: 1,
    shipping: 4.99,
  },
  {
    name: "Men's Athletic Sneaker",
    price: 38.9,
    quantity: 1,
    shipping: 9.99,
  },
  {
    name: "Men's Navigator Sunglasses Pilot",
    price: 16.9,
    quantity: 2,
    shipping: 4.99,
  },
  {
    name: "Women's Fleece Jogger Sweatpant",
    price: 24.0,
    quantity: 1,
    shipping: 9.99,
  },
  {
    name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    price: 21.1,
    quantity: 3,
    shipping: 4.99,
  },
  {
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    price: 24.0,
    quantity: 1,
    shipping: 4.99,
  },
  {
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    price: 28.99,
    quantity: 5,
    shipping: 0.0,
  },
  {
    name: "6 Piece White Dinner Plate Set",
    price: 20.67,
    quantity: 7,
    shipping: 4.99,
  },
];

products.forEach((p) => {
  console.log(`Name: ${p.name}`);
  console.log(`Price: $${p.price}`);
  console.log(`Quantity: ${p.quantity}`);
  console.log(`Shipping: $${p.shipping}`);
  console.log("\n");
});

const taxrate = 0.1;

let quantity = 0;
let shipping = 0;
let subtotal = 0;

products.forEach((product) => {
  quantity += product.quantity;
  shipping += product.shipping;
  subtotal += product.price * product.quantity;
});

const rawtax = subtotal + shipping;
const tax = rawtax * taxrate;
const total = rawtax + tax;

console.log(`Items (${quantity}) : $${subtotal.toFixed(2)}`);
console.log(`Shipping & handling : $${shipping.toFixed(2)}`);
console.log(`Total before tax: $${rawtax.toFixed(2)}`);
console.log(`Estimated tax (10%) : $${tax.toFixed(2)}`);
console.log(`Order total : $${total.toFixed(2)}`);
