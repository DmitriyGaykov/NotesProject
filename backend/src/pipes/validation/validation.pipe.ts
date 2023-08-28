import {ArgumentMetadata, BadRequestException, Injectable, Scope, ValidationPipe} from '@nestjs/common';
import {IError} from "../../error/interfaces/errors.interface";
import {ErrorService} from "../../error/error.service";
import {GraphQLError} from "graphql/error";
import {GraphQLException} from "@nestjs/graphql/dist/exceptions";

@Injectable({
  scope: Scope.TRANSIENT
})
export class ValidPipe extends ValidationPipe {
  constructor() {
    super();
  }
  async transform(value: any, metadata: ArgumentMetadata) : Promise<any> {
    try {
      return await super.transform(value, metadata)
    } catch (e) {
      const err: BadRequestException = e
      const errorsMessage: string[] = err.getResponse()['message']
      const exception: IError = ErrorService.receiveErrorsFrom(errorsMessage)
      throw new BadRequestException(exception)
    }
  }
}
