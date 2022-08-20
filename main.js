const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const MobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const MenuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const ShoppingCartContainer = document.querySelector("#shoppingCart");
const productDetailContainer = document.querySelector("#ProductDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", ToggleDesktopMenu);
MobileMenuIcon.addEventListener("click", ToggleMobileMenu);
MenuCarritoIcon.addEventListener("click", ToggleCarritoAside);
productDetailCloseIcon.addEventListener("click", CloseProductDetailAside);

function ToggleDesktopMenu() {
  const IsAsideClosed = aside.classList.contains("inactive");
  if (!IsAsideClosed) {
    ShoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function ToggleMobileMenu() {
  const IsAsideClosed = ShoppingCartContainer.classList.contains("inactive");
  if (!IsAsideClosed) {
    ShoppingCartContainer.classList.add("inactive");
  }
  CloseProductDetailAside();
  mobileMenu.classList.toggle("inactive");
}

function ToggleCarritoAside() {
  const IsMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const IsDesktopClosed = desktopMenu.classList.contains("inactive");
  const IsProductDetailClosed =
    productDetailContainer.classList.contains("inactive");

  if (!IsMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  if (!IsDesktopClosed) {
    desktopMenu.classList.add("inactive");
  }
  if (!IsProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }
  ShoppingCartContainer.classList.toggle("inactive");
}

function OpenProductDetailAside() {
  ShoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function CloseProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}
const productList = [];
productList.push({
  name: "cuchillo de ciervo",
  price: "U$S120",
  image: "./cuchillos/ciervo.jpeg",
});

productList.push({
  name: "cuchillo premium",
  price: "U$S220",
  image: "./cuchillos/pirata.jpeg",
});

productList.push({
  name: "cuchillo piedra",
  price: "U$S50",
  image: "./cuchillos/piedra.jpeg",
});

productList.push({
  name: "cuchillo de ciervo",
  price: "U$S120",
  image: "./cuchillos/ciervo.jpeg",
});

productList.push({
  name: "cuchillo premium",
  price: "U$S220",
  image: "./cuchillos/pirata.jpeg",
});

productList.push({
  name: "cuchillo piedra",
  price: "U$S50",
  image: "./cuchillos/piedra.jpeg",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", OpenProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productName = document.createElement("p");
    productName.innerText = product.name;
    const productInfoPrice = document.createElement("p");
    productInfoPrice.innerText = "U$S" + product.price;

    productInfoDiv.append(productInfoPrice, productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.append(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);
    cardsContainer.append(productCard);
  }
}

renderProducts(productList);
