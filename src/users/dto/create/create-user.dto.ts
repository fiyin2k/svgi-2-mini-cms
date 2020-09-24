import { CreateBaseAbstractDto } from "src/global/create-base-abstract.dto"
import { CreateProfileDto } from "./create-profile.dto"

export class CreateUserDto extends CreateBaseAbstractDto{
    readonly firstName: string
    readonly middelName: string
    readonly lastName: string
    readonly commonName: string
    readonly gender: string
    readonly dateOfBirth: Date
    readonly isActive: boolean
    readonly primaryEmailAddress: string
    readonly isPrimaryEmailAddressVerified: boolean
    readonly passwordSalt:string
    readonly passwordHash:string
    readonly isPasswordChangeRequired:boolean
    readonly resetPasswordToken:string
    readonly resetPasswordExpiration:Date
    readonly primaryEmailVerificationToken:string
    readonly otpEnabled:boolean
    readonly otpSecret: string
    readonly profile: CreateProfileDto
    //readonly roles: CreateRolesDto[]
}