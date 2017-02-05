//potentially be in the backend
import {FizzBuckDataProvider} from "./fizz-buck-data-provider";
import {FizzBuck} from "../../model/fizz-buck.model";
describe("Test Generation of Fizz buck data", ()=> {

    var generatedData = new FizzBuckDataProvider().generateData();

    it("100 rows are generated", () => {
        expect(100).toEqual(generatedData.length);
    });

    it("Correct data in array", () => {
        expect("Fizz").toEqual(caterForIndex(generatedData, 3));
        expect("Buck").toEqual(caterForIndex(generatedData, 5));
        expect("4").toEqual(caterForIndex(generatedData, 4));
        expect("BuckFizz").toEqual(caterForIndex(generatedData, 15));
        expect("BuckFizz").toEqual(generatedData[14].value);
    });

    function caterForIndex(data:Array<FizzBuck>, num:number):string {
        return data[num-1].value;
    }
});
