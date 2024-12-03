import { Inject, Injectable } from "@nestjs/common";
import { Firestore, collection, getDocs, where } from "firebase/firestore";
import { IConnectionService } from "src/IConnection.service";

@Injectable()
export class FirestoreService implements IConnectionService{
    constructor(@Inject('FIRESTORE') private readonly firestore:Firestore){
    }
   async connectDB(): Promise<string> {
        const colRef=collection(this.firestore,"pets");
        const snapshot=await getDocs(colRef);
        const pets=snapshot.docs.map(doc=>doc.data())
        return JSON.stringify(pets);
        // return "connected to firestore";
    }
    async getCollectionData(collectionName: string): Promise<any[]>{
        try{
            const colRef=collection(this.firestore,collectionName);
            const snapshot=await getDocs(colRef);
            const pets= snapshot.docs.map(doc=>doc.data());
            return pets;

            
        }catch(error){
            console.log(error);
        }
    }

    async getPets(userId: string):Promise<any[]>{
        try{
            const colRef=collection(this.firestore,"pets");
            const snapshot=(await getDocs(colRef));
            return snapshot.docs.map(x=>x);
        }
        catch(error){
            console.log(error);
        }
    }
}