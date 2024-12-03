import {IsNotEmpty, IsNumber, IsOptional, IsPort, IsString} from "class-validator";

export class AddPetDTO{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    breed:string;

    @IsNumber()
    @IsNotEmpty()
    age:number;

    @IsString()
    @IsOptional()
    photoUrl?:string;

    @IsString()
    @IsNotEmpty()
    ownerId:string;
}