import { Provider, Module, Global } from "@nestjs/common";
import {FirebaseApp,initializeApp} from 'firebase/app';
import {Firestore, getFirestore} from "firebase/firestore";
import { FirestoreService } from "./firestore.service";

const firebaseConfig = {
    apiKey: "AIXXXXXXXXXXXXXXXXXXXXXXXj0",
    authDomain: "pXXXXXXXX.firebaseapp.com",
    projectId: "pXXXXXXXX",
    storageBucket: "pXXXXXXXX.firebasestorage.app",
    messagingSenderId: "3XXXXXXXXXX8",
    appId: "1:XXXXXXX:web:XXXXX",
    measurementId: "G-XXXX"
  };
@Global()
@Module({
providers:[
    {
    provide:'FIREBASE_APP',
    useFactory:():FirebaseApp =>{
        return initializeApp(firebaseConfig);
        //will be defined to be in this module
}
},
{
    provide:"FIRESTORE",
    useFactory:(app:FirebaseApp):Firestore=>{
        return getFirestore(app);
    },
    inject:['FIREBASE_APP'],//this ensures the previous provider gets called and passed to its usefactory
},
{
    provide:"FIRESTORE_SERVICE",
    useClass:FirestoreService//to be defined
}
],

exports:[
    "FIREBASE_APP",
    "FIRESTORE",
    "FIRESTORE_SERVICE"
]
})
export class FirebaseModule{
   
//lets add shiz later
    }

