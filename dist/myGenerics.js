"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree({ brand: "brand", type: 7 });
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
/** GENERICS IN AN ARROW FUNCTION */
const getMoreSearchProducts = (products) => {
    //Some Db operations
    const myIndex = 4;
    return products[myIndex];
};
function genericfunc(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
// genericfunc(3, "5")
genericfunc(3, 6);
function genericfunc2(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
genericfunc2(3, {
    connection: "4200",
    username: "localhost",
    password: "12345",
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
