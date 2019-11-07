import { Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable, Column, ManyToOne, JoinColumn } from "typeorm";
import { Review } from "./Review";
import { User } from "./User";

@Entity()

export class Comment {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => User, user => user.comments)
    @JoinColumn({name: "user_id"})
    users: User

    @ManyToOne(type => Review, review => review.comments)
    @JoinColumn({name: "review_id"})
    reviews: Review

    @Column()
    message: string
}