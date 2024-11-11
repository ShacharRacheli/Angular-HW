export class Student{
    constructor(
        public ID:number,
        public FName?:string,
        // public LName?:string,  
        public adrress?:string,
        public average?:number,
        public phone?:string,
        public isActive?:boolean,
        public leavingDate?:Date
    ){}
}