import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {INote} from "../../notes/interfaces/note.interface";

@Entity()
export class Note implements INote  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 20
    })
    name: string;

    @Column({
        length: 300
    })
    context: string

    @Column({
        default: new Date()
    })
    publishDate: Date
}