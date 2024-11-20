export class Conferencia {
    id:string;
    name: string;
    starts: string;
    ends: string;
    description:string;

 public constructor(id:string,name: string, starts: string, ends: string,description:string) {
   this.id=id;
   this.name = name;
   this.starts = starts;
   this.ends = ends;
   this.description=description;
 }
}
