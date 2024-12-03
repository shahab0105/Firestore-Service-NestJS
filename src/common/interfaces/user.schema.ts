export class User{
    id:string;
    name:string;
    email:string;
    bio?:string;
    profilePicture?:string;
    location:{latitude:number,longitude:number};
    petIds:[string];
    createdAt?:Date;
    updatedAt?:Date;

    constructor(partial :Partial<User>){
        Object.assign(this,partial);
    }
}