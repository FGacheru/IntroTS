"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: "Gacheru",
    email: "gacheruf12@gmail.com",
    isActive: true
};
// function createUser({name: string, isPaid: boolean}): void{
// }
function createUser(user) {
    const { name, isPaid } = user;
    console.log(`Name: ${name}, Paid: ${isPaid}`);
}
createUser({ name: "Gacheru", isPaid: false });
/**Bad Behaviours */
// let newUser = {name: "Gacheru", isPaid: false, email: "g@gmail.com"}
// createUser(newUser)
function createCourse() {
    return { name: "TypeScript", price: 3000 };
}
function createStudent(student) {
    return { name: "Gacheru", isActive: false, email: "g@gmail.com" };
}
createStudent({ name: "Gacheru", isActive: false, email: "g@gmail.com" });
let myPatient = {
    _id: "",
    name: "",
    email: "",
    isActive: false
};
myPatient.email = "";
// myPatient._id = "";
myPatient.isActive = true;
