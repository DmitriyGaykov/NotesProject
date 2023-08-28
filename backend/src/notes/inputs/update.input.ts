import {Field, InputType, Int} from "@nestjs/graphql";

@InputType()
export class UpdateInput {
    @Field(() => Int)
    id: number

    @Field({ nullable: true })
    name?: string

    @Field({ nullable: true })
    context?: string
}