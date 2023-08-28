import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class AddNoteInput {
    @Field()
    name: string;

    @Field()
    context: string;
}