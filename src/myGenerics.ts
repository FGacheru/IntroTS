const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any) {
  return val;
}

function identityThree<T>(val: T): T {
  return val;
}

identityThree(3);

interface Bottle {
  brand: string;
  type: number;
}

identityThree<Bottle>({ brand: "brand", type: 7 });

function getSearchProducts<T>(products: Array<T>): T {
  const myIndex = 3;
  return products[myIndex];
}

/** GENERICS IN AN ARROW FUNCTION */
const getMoreSearchProducts = <T>(products: Array<T>): T => {
  //Some Db operations
  const myIndex = 4;
  return products[myIndex];
};

function genericfunc<T, U extends number>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// genericfunc(3, "5")
genericfunc(3, 6);

/**  EXTENDING AN INTERFACE */
interface Db {
  connection: string;
  username: string;
  password: string;
}

function genericfunc2<T, U extends Db>(valOne: T, valTwo: U): object {
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

/** GENERIC CLASSES */
interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

export {};
