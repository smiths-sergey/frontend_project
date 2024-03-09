
document.querySelector("#priceArrayBtn").addEventListener("click", function () {
  const prices = [100, 150, 200, 250];
  const pricesNew = prices.map((x) => `${x} ₽`);
  console.log(pricesNew);
});

document.querySelector("#userArrayBtn").addEventListener("click", function () {
  const users = [
    ["alex", 32],
    ["tomas", 17],
    ["olga", 14],
    ["andre", 24],
  ];
  const usersNew = users.filter((x) => x[1] > 18);
  console.log(usersNew);
});

document.querySelector("#sumArrayBtn").addEventListener("click", function () {
  const products = [
    { title: "пицца", price: 200 },
    { title: "баранина", price: 300 },
    { title: "креветки", price: 400 },
  ];
  const sum = products.reduce((acc, x) => {
    return acc + x.price;
  }, 0);
  console.log(sum);
});
