import {BadRequestException, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {IError} from "./interfaces/errors.interface";

@Injectable()
export class ErrorService {
    generateNoContentException(msg: string = 'No content') : HttpException {
        return new HttpException(msg, HttpStatus.NO_CONTENT)
    }

    generateError(error : IError) : BadRequestException {
        return new BadRequestException(error)
    }

    static receiveErrorsFrom(messages: string[]) : IError {
        let error : IError = {}

        let name : string;
        let message: string;
        let msgError: IError;

        for(let msg of messages) {
            [name, message] = msg.split('|')
            msgError = this.createError(name, message)
            error = this.unionErrors(error, msgError)
        }

        return error
    }

    static createError(key: string, msg: string) : IError {
        return {
            [key]: msg
        }
    }

    static unionErrors(...errors : IError[]) : IError {
        return Object.assign({}, ...errors)
    }
}
