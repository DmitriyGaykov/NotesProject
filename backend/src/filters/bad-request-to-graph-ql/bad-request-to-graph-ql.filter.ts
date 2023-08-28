import {ArgumentsHost, BadRequestException, Catch, ExceptionFilter} from '@nestjs/common';
import {GraphQLError} from "graphql/error";
import {GqlArgumentsHost} from "@nestjs/graphql";

@Catch(BadRequestException)
export class BadRequestToGraphQlFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    const ctx = gqlHost.getContext()



    const json = JSON.stringify(exception.response)
    return new GraphQLError(json)
  }
}
