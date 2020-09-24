import { BaseAbstractEntity } from "src/global/base-abstract.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { User } from "../../../models/user.entity";
import { Role } from "../../roles/models/role.entity";

@Entity()
export class Permission extends BaseAbstractEntity{

    @Column()
    name: string

    @Column()
    description: string

    //@Column()
    //properties: string - this is not a model field for Permissions
    
    @JoinTable()
    @ManyToMany(type => Role)
    roles: Role

}