export class Calc {
    constructor() {
      this.date = new Date(2023, 6, 23);
      this.day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][this.date.getDay()];
    }
}