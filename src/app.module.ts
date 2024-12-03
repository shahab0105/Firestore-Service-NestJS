import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoService } from './mongo.service';
import { FirebaseModule } from './firebase/firebase.module';
import { FirestoreService } from './firebase/firestore.service';
import { PetModule } from './modules/pet/pet.module';

@Module({
  imports: [FirebaseModule, PetModule],
  controllers: [AppController],
  providers: [
    AppService,
    MongoService,
  {
    provide:'IConnectionServiceMongoVariant',
    useClass:MongoService
  },{
    provide:'FirestoreService',
    useClass: FirestoreService,
  }],
})
export class AppModule {}
