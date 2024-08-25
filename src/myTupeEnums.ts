const user: (string | number)[] = [1, "hc",];
let tUser: [string, number, boolean];

// tUser = [1, "fg", true]
tUser = ["fg", 111, false];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [110, "fg@gmail.com"];

newUser[1] = "gf@gmail.com"
// newUser.push(true)

export {}