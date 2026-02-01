const products = [
  { name: "Headphones", price: 129.99, category: "electronics" },
  { name: "T-Shirt", price: 24.99, category: "clothing" },
  { name: "Bluetooth Speaker", price: 89.99, category: "electronics" },
  { name: "Denim Jeans", price: 59.99, category: "clothing" }
];

const grid = document.getElementById("productGrid");
const filter = document.getElementById("filter");

function showProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    grid.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p class="price">$${p.price}</p>
        <span class="tag ${p.category}">${p.category}</span>
      </div>
    `;
  });
}

showProducts(products);

filter.addEventListener("change", function () {
  const value = filter.value;
  if (value === "all") {
    showProducts(products);
  } else {
    showProducts(products.filter(p => p.category === value));
  }
});
