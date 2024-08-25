"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** WITH ABSTRACT CLASS YOU CANNOT CREATE A NEW OBJECT OF THE CLASS */
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //Calculations
        return 8;
    }
}
// const gacheru = new TakePhoto("", "")
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Got Sepia");
    }
}
const fg = new Instagram("", "", 2);
fg.getSepia();
fg.getReelTime();
