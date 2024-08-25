function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(
  name: string,
  email: string,
  isPaid: boolean,
  password?: string
) {}

let loginUser = (
  name: string,
  email: string,
  isPaid: boolean = false,
  password?: string
) => {};

addTwo(5);
getUpper("Gacheru");
signUpUser("Gacheru", "gacheruf12@gmail.com", false);
loginUser("Franky", "gacheruf12@gmail")

let getHello = (s: string): string => { return ""}
3124

let heroes = ["Thor", "Spiderman", "Gacheru"];

heroes.map((hero): string => {
    return `hero is ${hero}`
})

let errormessage = (err: string): void => {console.log(err);
}

function handleError(errMsg: string): never {
  throw new Error(errMsg)
}

export {};
