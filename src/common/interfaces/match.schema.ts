export class Match{
 pet1Id:string;
 pet2Id:string;
 id:string;
 timestamp:Date;
 constructor(partial: Partial<Match>){
    Object.assign(this,partial);
 }
}