import { Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable, Column } from "typeorm";
import { Property } from "./Property";

@Entity()

export class Locality {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    regionName: string

    @ManyToMany(type => Property, property => property.tags)
    @JoinTable({
        name: "property_locality",
        joinColumns: [{name: "locality_id"}],
        inverseJoinColumns: [{name: "property_id"}]
    })
    properties: Property[]
}