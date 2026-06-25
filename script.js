function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(item + " added to cart");
}

if (document.getElementById("cartList")) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let list = document.getElementById("cartList");

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}
