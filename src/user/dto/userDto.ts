import {IsString, IsEmail, IsStrongPassword, IsNotEmpty} from 'class-validator';

export class UserDto {

    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword()
    password: string;
    
}


export class LoginDto {

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
    
}