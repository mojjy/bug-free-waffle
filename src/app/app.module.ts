import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {FizzBuckService} from "./service/fizz-buck.service";
import {MessagesComponent} from "./message/messages.component";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {InMemoryMessageService} from "./service/mock/in-memory-message.service";
import {MessageService} from "./service/message.service";
import {MessageComponent} from "./message/message.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        MessagesComponent,
        MessageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        InMemoryWebApiModule.forRoot(InMemoryMessageService),
        routing
    ],
    providers: [appRoutingProviders, FizzBuckService, MessageService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
