export enum NameCourses{
    html="html",
    math="math",
    c="c",
    sql="sql"
}
export class Courses{
    constructor( public IdCourse:number,
        public NameCourse:string,
        public Subject:NameCourses
    ){}
}
