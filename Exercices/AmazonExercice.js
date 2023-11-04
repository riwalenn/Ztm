// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

console.log(user.cart)

function Item(name, price) {
    this.name = name;
    this.price = price;
}

const camera = new Item('Appareil photo', 658);
const headphones = new Item('Casque audio', 399);
const smartphone = new Item('Rogue phone 7', 1399);

// Implement a cart feature:
// 1. Add items to cart
// 2. Add 3% tax to item in cart

function addItemToCart(item)
{
    item.price += (item.price * 0.03);
    user.cart.push(item);
}

addItemToCart(camera)
addItemToCart(smartphone)

console.log(user.cart)

// 3. Buy item: cart --> purchases
// 4. Empty cart
function purchase(validation = false) {
    if (validation) {
        user.purchases = { ... user.cart};
        user.cart.length = 0;
    }
}

purchase(true);
console.log(user)

// Bonus:
// accept refunds.
// Track user history.