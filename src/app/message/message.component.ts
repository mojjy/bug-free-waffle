import {Component, Output, EventEmitter} from "@angular/core";
import {MessageService} from "../service/message.service";
import {Message} from "../model/message.type";
import {Router} from "@angular/router";

@Component({
    selector: 'message',
    template: require('./message.component.html')
})
export class MessageComponent {

    message:Message = {};
    @Output() onMessageAdded = new EventEmitter<boolean>();

    constructor(private messageService:MessageService) {}

    onSubmit() {
        console.log("submit");
        this.messageService.post(this.message).subscribe(newMessage => {
            console.log(`Message created ${newMessage.id}`);
            this.onMessageAdded.emit(true);
            this.message = {};
        });
    }
}
