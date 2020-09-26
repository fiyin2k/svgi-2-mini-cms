import { IsEmail, IsNotEmpty } from "class-validator";
import { CreateBaseAbstractDto } from "src/global/create-base-abstract.dto"
import { CreateProfileDto } from "./create-profile.dto"

export class CreateUserDto extends CreateBaseAbstractDto{
    @IsNotEmpty()
    readonly firstName: string
    @IsNotEmpty()
    readonly middleName: string
    @IsNotEmpty()
    readonly lastName: string
    @IsNotEmpty()
    readonly commonName: string
    @IsNotEmpty()
    readonly gender: string
    @IsNotEmpty()
    readonly dateOfBirth: Date
    @IsNotEmpty()
    readonly isActive: boolean
    @IsNotEmpty()
    readonly primaryEmailAddress: string

    // @IsNotEmpty()
    // readonly isPrimaryEmailAddressVerified: boolean
    // @IsNotEmpty()
    // readonly passwordSalt:string
    // @IsNotEmpty()
    // readonly passwordHash:string
    // @IsNotEmpty()
    // readonly isPasswordChangeRequired:boolean
    // @IsNotEmpty()
    // readonly resetPasswordToken:string
    // @IsNotEmpty()
    // readonly resetPasswordExpiration:Date
    // @IsNotEmpty()
    // readonly primaryEmailVerificationToken:string
    // @IsNotEmpty()
    // readonly otpEnabled:boolean
    // @IsNotEmpty()
    // readonly otpSecret: string
    readonly profile: CreateProfileDto
    //readonly roles: CreateRolesDto[]
}