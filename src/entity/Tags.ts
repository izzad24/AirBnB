import { Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable, Column } from "typeorm";
import { Property } from "./Property";

@Entity()

export class Tag {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    label: string

    @ManyToMany(type => Property, property => property.tags)
    @JoinTable({
        name: "property_tags",
        joinColumns: [{name: "tag_id"}],
        inverseJoinColumns: [{name: "property_id"}]
    })
    properties: Property[]
}