import { CreateBaseAbstractDto } from "src/global/create-base-abstract.dto";

export class CreatePermissionDto extends CreateBaseAbstractDto{
    readonly name: string
    readonly description: string
    
    //readonly role: CreateRoleDto
}