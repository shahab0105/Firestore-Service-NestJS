import {Body, Controller, Get, HttpStatus, Param, Post} from "@nestjs/common"
import { PetService } from "./pet.service";
import { AddPetDTO } from "src/common/dtos/pet/addpet.dto";
@Controller("pets")
export default class PetController{
    constructor(private readonly petService:PetService){

    }
        @Get()
       async getUserPets():Promise<string>{
        
            return  JSON.stringify( await this.petService.fetchAllPets());
        }
        @Post(":userId")
        
        async addUserPet(@Param("userId") userId:string,@Body() userPet: AddPetDTO):Promise<HttpStatus>{
            await this.petService.addPet(userId, userPet);
            return HttpStatus.OK;
        }
    }
