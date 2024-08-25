// class User1 {

//     email: string;
//     private name: string;
//     private readonly city: string = "Oyolee";

//     constructor(email: string, name: string,){
//         this.email = email;
//         this.name = name;
//     }
// }

// const gacheru = new User1("g@gmail.com",  "Franky");
// // gacheru.city = "Nairobi";
// // gacheru.name

class User1 {
  //   private readonly city: string = "Oyolee";
  /** PROTECTED IS ONLY ACCCESSIBLE TO IT'S CLASS AND ANYOTHER CLASS THAT INHERITS THAT CLASS, BUT NOT IN ANYOTHER OR OUTSIDE ITS CLASS */
  protected _courseCount = 1;

  constructor(
    public email: string,
    private name: string,
    private _city?: string
  ) {}

  /** PRIVATE METHODS */
  //   private deleteToken() {
  deleteToken() {
    console.log("Token Deleted");
  }

  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  /** No Return Type */
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

const gacheru = new User1("g@gmail.com", "Franky");
// gacheru.city = "Nairobi";
// gacheru.name

gacheru.deleteToken();

/** CLASS INHERITANCE */
class SubUser1 extends User1 {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}
