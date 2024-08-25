let score: number | string = 33

score = 55;
score = "55"


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let Gacheru: User | Admin = {name: "Gacheru", id: 111}
Gacheru = {username: "Kache", id: 338}