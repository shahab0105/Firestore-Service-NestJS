import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { AddPetDTO } from "../pet/addpet.dto";
import {Type} from 'class-transformer';
export class AddUserDTO{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsOptional()
    bio?:string;

    @IsString()
    @IsOptional()
    profilePicture?:string;

    @IsOptional()
    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>AddPetDTO)
    pets?:AddPetDTO;

}