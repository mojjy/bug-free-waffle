import {FizzBuck} from "../../model/fizz-buck.model";
import {FizzBuzzGenerator} from "../../data/fizz-buck-generator";
export class FizzBuckDataProvider {

    generateData():FizzBuck[] {
        let fizzBuckData:Array<FizzBuck> =[];
        for (var i = 1; i <= 100; i++) {
            fizzBuckData.push({index:i, value:FizzBuzzGenerator.gen(i)})
        }
        return fizzBuckData;
    }

}
