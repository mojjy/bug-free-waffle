import {Component, OnInit} from '@angular/core';
import {FizzBuck} from "../model/fizz-buck.model";
import {FizzBuckService} from "../service/fizz-buck.service";

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent implements OnInit {

    fizzBuckData:Array<FizzBuck>=[];

    constructor(private fizzBuckService:FizzBuckService) { }

    ngOnInit() {
        this.fizzBuckService.get().subscribe(data => {
            this.fizzBuckData = data;
        });
    }
}
