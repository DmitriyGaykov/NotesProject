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
}
