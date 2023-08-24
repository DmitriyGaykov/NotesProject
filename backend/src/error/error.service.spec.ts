import { Test, TestingModule } from '@nestjs/testing';
import { ErrorService } from './error.service';
import {IError} from "./interfaces/errors.interface";

describe('ErrorService', () => {
  let service: ErrorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErrorService],
    }).compile();

    service = module.get<ErrorService>(ErrorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be status 204', () => {
    const exc =  service.generateNoContentException()
    expect(exc?.getStatus()).toEqual(204)
  })

  it('should be bad request with message the object name: Hello world', () => {
    const error : IError = {
      name: 'Hello world'
    }

    const exc = service.generateError(error)
    expect(exc).toBeDefined()
    expect(exc.getStatus()).toBe(400)
    expect(exc.getResponse()).toHaveProperty('name')
    expect(exc.getResponse()['name']).toBe(error.name)
  })
});
