import { strictEqual } from 'assert';

export class NewUser {
    constructor(
        public firstName : string,
        public username : string,
        public email : string,
        public password : string,
        public country : string,
        public state : string,
        public address? : string,
        public lastName?: string,
        public zip? : number,
    ){}
}
