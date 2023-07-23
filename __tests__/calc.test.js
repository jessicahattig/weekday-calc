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
});