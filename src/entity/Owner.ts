import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Property } from "./Property";

@Entity()
export class Owner {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    contact_no: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @OneToMany(type => Property, property => property.owner)
    properties: Property[];

}
