import {applyDecorators} from "@nestjs/common";
import {MaxLength, MinLength} from "class-validator";


export const ValidNoteName = () => {
    const message = 'name|Name should be longer or equal to 2 characters and shorter than to 20 characters'
    return applyDecorators(
        MinLength(2, {
            message
        }),
        MaxLength(20, {
            message
        })
    )
}

export const ValidNoteContext = () => {
    const message = 'context|Note should be longer then or equal to 10 characters or shorter than to 300 characters'
    return applyDecorators(
        MinLength(10, {
            message
        }),
        MaxLength(300, {
            message
        })
    )
}