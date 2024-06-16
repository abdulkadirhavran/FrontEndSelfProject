let products = [
  {
    name: "Acer nitro",
    category: "Technology",
    price: 5000,
    rating: 4.1,
  },

  {
    name: "Samsung galaxyFold",
    category: "Technology",
    price: 6000,
    rating: 4.8,
  },
  {
    name: "Nike",
    category: "Sportswear",
    price: 500,
    rating: 4.2,
  },
  {
    name: "Puma",
    category: "sportswear",
    price: 450,
    rating: 4.9,
  },
  {
    name: "msi leopard",
    category: "Technology",
    price: 7000,
    rating: 4.8,
  },
  {
    name: "msi katana",
    category: "Technology",
    price: 11000,
    rating: 5,
  },
];

let filteredProducts = [];

let userProductName = prompt("Please tell us a product name");

filteredProductsFill(products);
filteredProductsPrint(filteredProducts);

function filteredProductsFill(products) {
  products.forEach((product) => {
    if (product.name.toUpperCase().includes(userProductName.toUpperCase(), 0)) {
      filteredProducts.push(product);
    }
  });
}

function filteredProductsPrint(products) {
  products.forEach((product) => {
    console.log(
      `Product Name: ${product.name} | Product category: ${product.category} | Product rating: ${product.rating}`
    );
  });
}
