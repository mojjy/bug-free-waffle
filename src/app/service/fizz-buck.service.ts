import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {FizzBuck} from "../model/fizz-buck.model";
import {FizzBuckDataProvider} from "./mock/fizz-buck-data-provider";

@Injectable()
export class FizzBuckService {

    get():Observable<FizzBuck[]> {
        return Observable.of(new FizzBuckDataProvider().generateData());
    }
}
