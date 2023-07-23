import {Calc } from './../src/calc.js'

describe("Calc", () =>{

    let calc;
    beforeEach(() => {
        calc = new Calc();
    });

    test("should create an object with a date and a day of the week", () => {
        expect(calc.date).toEqual(new Date(2023, 6, 23));
        expect(calc.day).toEqual("Sunday");
    });

    test("should return a day of the week connected to user inputted date", () => {
        let inputDate =  new Date(2023, 7, 23);
        let calcDate = new Calc(inputDate);
        expect(calcDate.day).toEqual("Sunday");
    });
});
