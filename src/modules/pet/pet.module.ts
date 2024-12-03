import {Module,Global} from "@nestjs/common"
import { PetService } from "./pet.service";
import PetController from "./pet.controller";
import { FirebaseModule } from "src/firebase/firebase.module";
import { FirestoreService } from "src/firebase/firestore.service";

// @Global()
@Module({
    providers:[PetService,
        //the fix was no need to redefine as it was already being provided by firebasemodule
        // {
        //     provide:'Firestore',
        //     useClass: FirestoreService,// problem is firestoreservice is being injected but i need firestroredb
        //   }
        ],
    controllers:[PetController],
    imports:[FirebaseModule]
})
export class PetModule{

}