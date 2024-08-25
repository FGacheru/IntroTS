/** WITH ABSTRACT CLASS YOU CANNOT CREATE A NEW OBJECT OF THE CLASS */
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    //Calculations
    return 8;
  }
}
// const gacheru = new TakePhoto("", "")

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Got Sepia");
  }
}
const fg = new Instagram("", "", 2);
fg.getSepia();
fg.getReelTime();

export {};
