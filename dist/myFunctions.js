"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid, password) { }
let loginUser = (name, email, isPaid = false, password) => { };
addTwo(5);
getUpper("Gacheru");
signUpUser("Gacheru", "gacheruf12@gmail.com", false);
loginUser("Franky", "gacheruf12@gmail");
let getHello = (s) => { return ""; };
3124;
let heroes = ["Thor", "Spiderman", "Gacheru"];
heroes.map((hero) => {
    return `hero is ${hero}`;
});
let errormessage = (err) => {
    console.log(err);
};
function handleError(errMsg) {
    throw new Error(errMsg);
}
