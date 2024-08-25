const User = {
    name: "Gacheru",
    email: "gacheruf12@gmail.com",
    isActive: true
}

// function createUser({name: string, isPaid: boolean}): void{

// }

function createUser(user: {name: string, isPaid: boolean}){
    const {name, isPaid} = user;
    console.log(`Name: ${name}, Paid: ${isPaid}`);
    
}


createUser({name: "Gacheru", isPaid: false})

/**Bad Behaviours */

// let newUser = {name: "Gacheru", isPaid: false, email: "g@gmail.com"}
// createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name: "TypeScript", price: 3000}
}







/** TYPE ALIASES */

type Student = {
    name: string;
    email: string;
    isActive: boolean
}

function createStudent(student: Student): Student {
    return {name: "Gacheru", isActive: false, email: "g@gmail.com"}
}
createStudent({name: "Gacheru", isActive: false, email: "g@gmail.com"})




/**  READONLY & OPTIONAL */

type Patient = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCard?: string
}

let myPatient: Patient = {
    _id: "",
    name: "",
    email: "",
    isActive: false
}
myPatient.email = "";
// myPatient._id = "";
myPatient.isActive = true;


export{}