// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

const compose = (f, g) => (data) => f(g(data));

//  * Cart
const addTaxeToItem = (item) => {
    item.price += item.price * 0.03
    return item;
};
const addItemToCart = (item) => user.cart.push(item);

const camera = { name: 'Appareil photo', price: 658 };
const headphones = { name: 'Casque audio', price: 399 };
const smartphone = { name: 'Rogue phone 7', price: 1399 };

const addItem = compose(addItemToCart, addTaxeToItem);
addItem(camera);
addItem(smartphone);

//  * Purchases
const cloneCart = () => user.purchases = { ...user.cart};
const emptyCart = () => user.cart = [];

const purchase = function (validate = false) {
    if (validate) {
        const buyItems = compose(emptyCart, cloneCart);

        return  buyItems();
    }
}

purchase(true); // true or false

//  * Refund
function refundPurchase(refund = false) {
    if (refund) {
        function emptyPurchases() {
            return user.purchases = [];
        }

        return emptyPurchases();
    }
}

refundPurchase(false);
console.log(user);