import {INote} from "../../notes/interfaces/note.interface";
import {Field, ID, Int, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Note implements INote {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    context: string;

    @Field(type => Date)
    publishDate: Date;
}