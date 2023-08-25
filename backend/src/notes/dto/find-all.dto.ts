import {ArgsType, Field, Int} from "@nestjs/graphql";

@ArgsType()
export class FindAllDto {
    @Field(() => Int, {
        nullable: true
    })
    page: number
}