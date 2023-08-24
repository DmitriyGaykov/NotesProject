import { Injectable } from '@nestjs/common';
import {INote, INoteDto, INoteService, IPatchNoteDto} from "./interfaces/note.interface";
import {NotesDbService} from "./notes-db.service";

@Injectable()
export class NotesService implements INoteService {
    constructor(
       private readonly noteDbService : NotesDbService,
    ) {}

    async add(note: INoteDto): Promise<INote> {
        return this.noteDbService.add(note)
    }

    async findAll(): Promise<INote[]> {
        return this.noteDbService.findAll()
    }

    async findById(id: number): Promise<INote> {
        return this.noteDbService.findById(id)
    }

    async remove(id: number): Promise<INote> {
        return this.noteDbService.remove(id)
    }

    async update(note: IPatchNoteDto): Promise<INote> {
        return this.noteDbService.update(note)
    }

}
