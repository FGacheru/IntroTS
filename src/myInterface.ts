interface User {
  readonly dbId: number;
  userId: number;
  googleId?: string;
  email: string;

  /** Both ways below can be used to introduce the function */

  //   startTrial: () => string;
  startTrial(): string;

  getCoupon(couponname: string, value: number): number;
}

/**  RE-OPENING OF THE INTERFACE */
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "teacher" | "learner";
}

const hitesh: Admin = {
  dbId: 2223,
  userId: 123,
  email: "g@gmail.com",
  githubToken: "github",
  role: "admin",
  startTrial: () => {
    return "Trail Started";
  },
  getCoupon: (name: "anyname", off: 11) => {
    return 10;
  },
};

export{}