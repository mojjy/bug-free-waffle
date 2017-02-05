import {InMemoryDbService} from "angular2-in-memory-web-api";

export class InMemoryMessageService implements InMemoryDbService {
   createDb() {
       let messages = [
           {id:1, message:'Nice Website', name:'James'},
           {id:2, message:'Tell me more about fizz buck', name:'Earl'},
           {id:3, message:'Fizzzzzzy', name:'Jones'}
       ];

       return {messages};
   }
}