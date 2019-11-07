import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Booking } from "./Booking";
import { Comment } from "./Comment";
import { Review } from "./Review";

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

    
    @OneToMany(type => Comment, comment => comment.users)
    comments: Comment[];

    @OneToMany(type => Review, review => review.users)
    reviews: Review[];

}
