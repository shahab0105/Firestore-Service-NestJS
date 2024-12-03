import {Injectable,Provider,Global, Inject} from "@nestjs/common";
import { Firestore, addDoc, arrayUnion, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { AddPetDTO } from "src/common/dtos/pet/addpet.dto";
import { Pet } from "src/common/interfaces/pet.schema";
import { FirestoreService } from "src/firebase/firestore.service";

@Injectable()
export class PetService{
    constructor(@Inject('FIRESTORE') private readonly firestore:Firestore){

    }

    async addPet(userId:string="ob4kQ30562L6u6npgcOy", userPet:AddPetDTO){
        try{
            const petRef=collection(this.firestore,"pets");
            const petData={...userPet,ownerId:userId,createdAt:new Date(), updatedAt:new Date()}
            const addedPet=await addDoc(petRef,petData)
            const userRef=doc(this.firestore,'users',userId);
            await updateDoc(userRef,{
                petIds:arrayUnion(addedPet.id),
            });
        }
        catch(error){
            console.log("error")
        }
    }
    async fetchAllPets(userId:string="ob4kQ30562L6u6npgcOy"):Promise<any[]>{
        try{
            const petRef=collection(this.firestore,"pets");
            const userPetQuery=query(petRef,where("ownerId","==",userId));
            const petSnapshot=await getDocs(userPetQuery);
            if(!petSnapshot.empty){
                const petsArr=petSnapshot.docs.map(pet=>{
                    return new Pet({
                      id:pet.id,
                      ...pet.data()  
                    })
                });
                return petsArr;
            }
        }
        catch(error){
            console.log(error);
        }
    }
}