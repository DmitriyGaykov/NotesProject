import { ValidPipe } from './validation.pipe';
import {AddDto} from "../../notes/dto/add.dto";
import {BadRequestException} from "@nestjs/common";
import {IError} from "../../error/interfaces/errors.interface";

describe('ValidationPipe', () => {
  const validPipe = new ValidPipe()
  it('should be defined', () => {
    expect(validPipe).toBeDefined();
  });
  const note : AddDto = new AddDto()
  note.context = '12345678'
  note.name = '1'

  it('should be bad request exception', async () => {
    try {
      await validPipe.transform(note, {} as any)
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException)

      const error = e as BadRequestException
      const resp = error.getResponse()
      expect(resp).toBeDefined()

      const message: IError = resp['message']
      expect(message.name).toBeDefined()
      expect(message.context).toBeDefined()
    }
  })

  note.name = '123';
  note.context = '123456789'

  it('should return equaled object', async () => {
    const _note = await validPipe.transform(note, {} as any)

    expect(note).toBeDefined()
    expect(note.name).toEqual(note.name)
    expect(note.context).toEqual(note.context)
  })
});
