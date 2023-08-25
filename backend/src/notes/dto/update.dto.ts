import {ArgsType, Field, Int} from "@nestjs/graphql";

@ArgsType()
export class UpdateDto {
    @Field(type => Int)
    id: number;

    @Field({
        nullable: true
    })
    name : string

    @Field({
        nullable: true
    })
    context : string
}