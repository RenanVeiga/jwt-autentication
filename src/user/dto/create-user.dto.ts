import { IsString } from "class-validator"

export class CreateUserDto {
    id:number

    @IsString()
    name: string

    @IsString()
    email:string
}
