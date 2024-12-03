export class Pet{
    id:string;
    name:string;
    breedId:string;
    age:number;
    gender:string;
    photoUrl?:string;
    ownerId:string;
    createdAt?:Date;
    updatedAt?:Date;
    

  //whats this
  constructor(partial: Partial<Pet>) {
    Object.assign(this, partial); // Assigns properties from a partial object
  }
}