import {Column, CreateDateColumn,UpdateDateColumn,PrimaryGeneratedColumn} from 'typeorm';

export abstract class BaseAbstractEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    dateCreated: Date;

    @Column({nullable:true})
    createdBy: string;

    @UpdateDateColumn()
    dateLastModified: Date;

    @Column({nullable:true})
    lastModifiedBy: string;

    @Column({nullable:true})
    lastChangeInfo: string;

    @Column({nullable:true})
    deletedBy: string;
}