import {Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { Booking } from "./Booking";
import { Owner } from "./Owner";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @ManyToOne(type => Owner, owner => owner.properties)
    @JoinColumn({name: "owner_id"})
    owner: Owner;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @OneToMany(type => Booking, booking => booking.propertise)
    bookings: Booking[];

}
