import { CreateBaseAbstractDto } from "src/global/create-base-abstract.dto";

export class CreateRoleDto extends CreateBaseAbstractDto{
    readonly name: string
    readonly description: string
    
    //readonly role: CreateUserDto
}