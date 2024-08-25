/**  TYPE NARROWING
 * This is the typeof or type guards
 */
function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  console.log("It's a number");
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Provide ID");
    return;
  }
  id.toLowerCase();
}

/** REMEMEBER TO ALSO CHECK ON THE "" COZ IT RETURNS AS A STRING */
function printALl(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
        return s;
      }
    } else if (typeof strs === "string") {
      console.log(strs);
      return strs;
    }
  }
  throw new Error("Please add a value");
}

/** THE IN OPERATOR NARROWING */
interface User2 {
  name: string;
  email: string;
}

interface Admin2 {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin2) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

/** INSTANCEOF */
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

/** TYPE PREDICATES */
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "Fish food";
  } else {
    pet;
    return "Bird food";
  }
}

/** Discriminated Unions */
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  // else {
  //   return shape.side ** 2;
  // }
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.side ** 2;

    case "rectangle":
      return shape.length * shape.width;

    default:
      const _defaultForShape: never = shape;
      return _defaultForShape;
  }
}
