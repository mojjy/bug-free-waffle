
export class FizzBuzzGenerator {

    static genOptimal(input: number):string {
       let val = '';

        if (!(input % 5)) {
            val = "Buck";
        }

       if (!(input % 3)) {
           val += "Fizz";
       }

       return val ? val : input + '';
    }

    //more readable
    static gen(input: number):string {
        if (!(input % 5) && !(input % 3)) {
            return "BuckFizz"
        } else if (!(input % 5)) {
            return "Buck";
        } else if (!(input % 3)) {
            return "Fizz";
        } else {
            return input + '';
        }
    }
}