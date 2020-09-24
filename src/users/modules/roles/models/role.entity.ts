import { BaseAbstractEntity } from "src/global/base-abstract.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { User } from "../../../models/user.entity";
import { Permission } from "../../permissions/models/permission.entity";


@Entity()
export class Role extends BaseAbstractEntity{

    @Column()
    name: string

    @Column()
    description: string

    //@Column()
    //properties: string - this is not a model field for Roles
    
    @JoinTable()
    @ManyToMany(type => User)
    user: User

    @ManyToMany(type=> Permission)
    permissions:Permission

}