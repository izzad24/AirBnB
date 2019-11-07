import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { Booking } from "./Booking";

@Entity()
export class Payment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @Column()
    amount: number;

    @ManyToOne(type => Booking, booking => booking.payments)
    @JoinColumn({name: "booking_id"})
    booking: Booking;

}
