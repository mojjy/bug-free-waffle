import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Message} from "../model/message.type";

@Injectable()
export class MessageService {

    private url = "api/messages";

    constructor(private http:Http) {
    }

    get():Observable<Message[]> {
        return this.http.get(this.url).map(response => {
            return response.json().data as Message[];
        });
    }

    post(message:Message) : Observable<Message> {
        return this.http.post(this.url, JSON.stringify(message))
            .map(response => {
                return response.json().data as Message;
            });
    }
}
