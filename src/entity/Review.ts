import { Entity, ManyToMany, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Property } from "./Property";
import { Comment } from "./Comment";
import { User } from "./User";

@Entity()

export class Review {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    review: string

    @Column()
    rating: number

    @ManyToOne(type => Property, property => property.reviews)
    @JoinColumn({name: "property_id"})
    properties: Property

    @ManyToOne(type => User, user => user.reviews)
    @JoinColumn({name: "user_id"})
    users: User

    @OneToMany(type => Comment, comment => comment.reviews)
    comments: Comment[];
}