import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Booking } from "./Booking";

@Entity()
export class User {

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

    @OneToMany(type => Booking, booking => booking.users)
    bookings: Booking[];

}
