// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

function Item(name, price) {
    this.name = name;
    this.price = price;
}

function addItemToCart(item)
{
    user.cart.push(item);
    function addTaxeToItem() {
        return item.price += item.price * 0.03;
    }

    return addTaxeToItem();
}

const camera = new Item('Appareil photo', 658);
const headphones = new Item('Casque audio', 399);
const smartphone = new Item('Rogue phone 7', 1399);

addItemToCart(camera)
addItemToCart(headphones)
addItemToCart(smartphone)

function buyItem(validationCart = false) {
    if (validationCart) {
        user.purchases = { ... user.cart};
        function emptyCart() {
            return user.cart = []
        }

        return emptyCart();
    }
}

buyItem(true);

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