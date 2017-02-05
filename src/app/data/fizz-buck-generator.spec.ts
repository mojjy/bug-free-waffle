import {FizzBuzzGenerator} from "./fizz-buck-generator";

describe("Fizz Buck Generator Test", () => {

    it ("All other numbers generate original number", () => {
       expect("1").toEqual(FizzBuzzGenerator.gen(1));
       expect("2").toEqual(FizzBuzzGenerator.gen(2));
       expect("13").toEqual(FizzBuzzGenerator.gen(13));
    });

    it("Multiples of 3 generate 'Fizz'", ()=> {
        expect("Fizz").toEqual(FizzBuzzGenerator.gen(3));
        expect("Fizz").toEqual(FizzBuzzGenerator.gen(18));
    });

    it("Multiples of 5 generate 'Buck'", ()=> {
        expect("Buck").toEqual(FizzBuzzGenerator.gen(5));
        expect("Buck").toEqual(FizzBuzzGenerator.gen(25));
    });

    it ("Multiples of 3 and 5 generate 'BuckFizz'", () => {
        expect("BuckFizz").toEqual(FizzBuzzGenerator.gen(0));
        expect("BuckFizz").toEqual(FizzBuzzGenerator.gen(15));
        expect("BuckFizz").toEqual(FizzBuzzGenerator.gen(225));
    });
});
