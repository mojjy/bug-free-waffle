import {Component, OnInit} from "@angular/core";
import {Message} from "../model/message.type";
import {MessageService} from "../service/message.service";

@Component({
    selector: 'messages',
    template: require('./messages.component.html')
})
export class MessagesComponent implements OnInit {

    private messages:Array<Message> = [];

    constructor(private messageService:MessageService) {}

    ngOnInit(): void {
        this.reloadMessages();
    }

    private reloadMessages() {
        this.messageService.get().subscribe(message => {
            console.log(message);
            this.messages = message;
        });
    }

    onMessageAdded(messageAdded:boolean) {
        if (messageAdded) {
           this.reloadMessages();
        }
    }
}
