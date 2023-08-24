import { Test, TestingModule } from '@nestjs/testing';
import { NotesDbService } from './notes-db.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Note} from "../db/entities/note.entity";
import {_TypeOrmModule} from "../db/type-orm.module";
import {DEFAULT_NOTE, INote, INoteDto, IPatchNoteDto} from "./interfaces/note.interface";
import {ErrorModule} from "../error/error.module";
import {not} from "rxjs/internal/util/not";
import {HttpException, HttpStatus} from "@nestjs/common";

describe('NotesDbService', () => {
  let service: NotesDbService;

  const noteDto : INoteDto = {
    name: 'Dima',
    context: "Hello world"
  }

  let id : number;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ErrorModule,_TypeOrmModule, TypeOrmModule.forFeature([Note])],
      providers: [NotesDbService],
    }).compile();

    service = module.get<NotesDbService>(NotesDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('add should return note with id and publishDate', async () => {


    const note = await service.add(noteDto)
    id = note?.id;

    expect(note).toBeDefined()
    expect(id).toBeDefined()
    expect(note?.publishDate).toBeDefined()
    expect(note?.name).toEqual(noteDto.name)
  });

  it("FindById should return a noteDto object", async () => {
    const note = await service.findById(id)
    expect(note).toBeDefined()
    expect(note.id).toEqual(id)

    expect(
        note.name === noteDto.name &&
        note.context === noteDto.context
    ).toBe(true)
  })

  it('FindById should return noContentException', async () => {
    const _id = -1244

    try {
      await service.findById(_id)
    } catch (e) {
      expect(e).toBeInstanceOf(HttpException)
      expect(e.getStatus()).toBe(HttpStatus.NO_CONTENT)
    }
  })

  it('Update should edit only a name field and return old object', async () => {
    const editObject : IPatchNoteDto = {
      id: id,
      name: "Oleg"
    }

    const newnote = await service.update(editObject)

    expect(newnote).toBeDefined()
    expect(newnote.name === noteDto.name).toEqual(true)
    expect(newnote.context).toEqual(noteDto.context)

    const findByIdResult = await service.findById(id)

    expect(findByIdResult).toBeDefined()
    expect(findByIdResult.name !== noteDto.name).toEqual(true)
    expect(findByIdResult.context).toEqual(noteDto.context)

    noteDto.name = editObject.name
  })

  it('Update should call httpError, when users with id are not exists', async () => {
    try {
      const editObject : IPatchNoteDto = {
        id: -1314,
        name: 'Maksim'
      }

      await service.update(editObject)
    } catch (e) {
      expect(e).toBeInstanceOf(HttpException)
      expect(e.getStatus()).toBe(HttpStatus.NO_CONTENT)
    }
  })

  it('Remove should return deleted object', async () => {
    const note = await service.remove(id)

    expect(note.name).toEqual(noteDto.name)
  })

  it('Remove should return httpError, if object is not exists in db', async () => {
    try {
      const note : INote = await service.remove(id)
    } catch (e) {
      expect(e).toBeInstanceOf(HttpException)
      expect(e.getStatus()).toBe(HttpStatus.NO_CONTENT)
    }
  })

  it('findAll should return array of INote', async () => {
    const findAllResult: INote[] = await service.findAll()
    expect(Array.isArray(findAllResult)).toBe(true)
  })
});
