const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();
let ShoppingCart = require('./../src/shopping-cart');

const suite = lab.suite;
const test = lab.test;

suite('The shopping cart', () => {
  suite('subtotal should', () => {
    test('be 0 if no items are passed in', (done) => {
      let shoppingCart = new ShoppingCart();
      Code.expect(shoppingCart.subtotal).to.equal(0);
      done();
    });

    test('be the sum of the price * quantity for all items', (done) => {
      let shoppingCart = new ShoppingCart([
        {
          id: 1,
          quantity: 4,
          price: 50
        },
        {
          id: 2,
          quantity: 2,
          price: 30
        },
        {
          id: 3,
          quantity: 1,
          price: 40
        }
      ]);

      Code.expect(shoppingCart.subtotal).to.equal(300);
      done();
    });
  });

  suite('add method should', () => {
    test('store the item in the shopping cart', (done) => {
      let shoppingCart = new ShoppingCart([
        {
          id: 1,
          quantity: 4,
          price: 50
        }
      ]);

      shoppingCart.add({
        id: 2,
        quantity: 2,
        price: 30
      });

      // Code.expect(shoppingCart.items).to.deep.equal([
      Code.expect(shoppingCart.items).to.equal([
        {
          id: 1,
          quantity: 4,
          price: 50
        },
        {
          id: 2,
          quantity: 2,
          price: 30
        }
      ]);
      done();
    });

    test('return the item that was stored in the shopping cart', (done) => {
      let shoppingCart = new ShoppingCart([
        {
          id: 1,
          quantity: 4,
          price: 50
        }
      ]);

      let item = {
        id: 2,
        quantity: 2,
        price: 30
      };

      let addedItem = shoppingCart.add(item);
      Code.expect(addedItem).to.shallow.equal(item);
      done();
    });
  });
});
