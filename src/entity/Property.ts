import {Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany, ManyToOne, JoinColumn, ManyToMany} from "typeorm";
import { Booking } from "./Booking";
import { Owner } from "./Owner";
import { Tag } from "./Tags";
import { Locality } from "./Locality";
import { Review } from "./Review";

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

    @ManyToMany(type => Tag, tags => tags.properties)
    tags: Tag[];

    @ManyToMany(type => Locality, locality => locality.properties)
    locality: Locality[];

    @OneToMany(type => Review, review => review.properties)
    reviews: Review[];

}
