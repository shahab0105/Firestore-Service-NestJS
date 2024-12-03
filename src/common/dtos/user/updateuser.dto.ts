import { IsArray, IsOptional, IsString } from "class-validator";

export class UpdateUserDto{
    @IsString()
    @IsOptional()
    name?:string;

    @IsString()
    @IsOptional()
    bio?:string;

    @IsString()
    @IsOptional()
    profilePicture?:string;

    @IsArray()
    @IsOptional()
    petIds?:string[];

}