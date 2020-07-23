import {getData, dbUrl as url} from './modules/db';
getData();
console.log(url);

export namespace A{
    interface Animal{
        name:string;
        eat():void;
    }

    export class Dog implements Animal{
        name: string;
        constructor(name:string){
            this.name = name;
        }
        eat(): void {
            console.log(`${this.name} is eating`);
            
        }
        
    }

}

var d = new A.Dog('ww');