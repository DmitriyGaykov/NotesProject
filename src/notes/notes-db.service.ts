import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Note} from "../db/entities/note.entity";
import {DeleteResult, Repository} from "typeorm";
import {INote, INoteDto, INoteService, IPatchNoteDto} from "./interfaces/note.interface";
import {ErrorService} from "../error/error.service";

@Injectable()
export class NotesDbService implements INoteService {
    constructor(
       @InjectRepository(Note) private readonly noteRepository : Repository<Note>,
       private readonly errorService : ErrorService
    ) {}

    async findAll() : Promise<INote[]> {
        try {
            return await this.noteRepository.find()
        } catch {
            throw this.errorService.generateError({
                database : 'database is not responding'
            })
        }
    }

    async findById(id : number) : Promise<INote> {
        try {
            const note = await this.noteRepository.findOneBy({ id })

            if(note)
                return note

            throw this.errorService.generateNoContentException()
        } catch(e) {
            throw e
        }
    }

    async add({ name, context } : INoteDto) : Promise<INote> {
        try {
            const note = {
                name,
                context
            } as Note
            return await this.noteRepository.save(note)
        } catch (e) {
            throw new BadRequestException(e)
        }
    }

    async remove(id : number) : Promise<INote> {
        try {
            const note = await this.noteRepository.findOneBy({ id })

            if(note) {
                await this.noteRepository.remove(note)
                return note
            }

            throw this.errorService.generateNoContentException()
        } catch (e) {
            throw e
        }
    }

    async update({ id, name, context }: IPatchNoteDto): Promise<INote> {
        try {
            const note = await this.findById(id)

            await this.noteRepository.update(id, {
                name,
                context
            })

            return note
        } catch (e) {
            throw e
        }
    }
}
