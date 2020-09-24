import { BaseAbstractEntity } from "src/global/base-abstract.entity";
import { Column, Entity, Generated, ManyToMany, OneToMany, OneToOne } from "typeorm";
//import { Permissions } from "../modules/permissions/models/permissions.entity";- no direct relationship with user
import { Profile } from "./profile.entity";
import { Role } from "../modules/roles/models/role.entity";


@Entity()
export class User extends BaseAbstractEntity{
    
    @Generated("uuid")
    uuid: string;
    
    //@Column({unique: true})
    //code: string

    @Column()
    firstName: string

    @Column()
    middleName: string

    @Column()
    lastName: string

    @Column()
    commonName: string

    @Column()
    gender: string

    @Column()
    dateOfBirth: Date

    @Column()
    isActive: boolean

    @Column({unique:true})
    primaryEmailAddress: string

    @Column()
    isPrimaryEmailAddressVerified: boolean

    @Column()
    passwordSalt:string

    @Column()
    passwordHash:string

    @Column()
    isPasswordChangeRequired:boolean

    @Column()
    resetPasswordToken:string

    @Column()
    resetPasswordExpiration:Date

    @Column()
    primaryEmailVerificationToken:string

    @Column()
    otpEnabled:boolean

    @Column()
    otpSecret: string

    @OneToOne(type => Profile, profile => profile.user, {cascade: true})
    profile: Profile

    @ManyToMany(type => Role)
    roles: Role

    //@OneToMany(type => Billing, billing => billing.tenant)
    //billings: Billing[] //notice the array here

    /*Even though there is a relationship between tenant and everyother model,
    typeorm allows us to define many-to-one without one-to-many. But you can't 
    define one-to-many without many-to-one. Here, we shall define no relationship
    but put many-to-one in every other entity in relation to tenant.
    See https://typeorm.io/#/many-to-one-one-to-many-relations 
    */
}