
const cartBasket = document.querySelector('#cart-basket');


function miniCartList() {
    return cartBasket.innerHTML =  `
    <h2>your cart is empty</h2>
    <button class="keep-shop" type="button">back to home</button>
    `
}

miniCartList();