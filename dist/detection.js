"use strict";
/**  TYPE NARROWING
 * This is the typeof or type guards
 */
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    console.log("It's a number");
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Provide ID");
        return;
    }
    id.toLowerCase();
}
/** REMEMEBER TO ALSO CHECK ON THE "" COZ IT RETURNS AS A STRING */
function printALl(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
                return s;
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
            return strs;
        }
    }
    throw new Error("Please add a value");
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
/** INSTANCEOF */
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish food";
    }
    else {
        pet;
        return "Bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // else {
    //   return shape.side ** 2;
    // }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
