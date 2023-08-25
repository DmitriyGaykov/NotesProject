import { Injectable } from '@nestjs/common';
import {INote, INoteDto, INoteService, IPatchNoteDto} from "./interfaces/note.interface";
import {NotesDbService} from "./notes-db.service";

@Injectable()
export class NotesService implements INoteService {
    private static readonly countTake = 5

    constructor(
       private readonly noteDbService : NotesDbService,
    ) {}

    async add(note: INoteDto): Promise<INote> {
        return this.noteDbService.add(note)
    }

    async findAll(page : number | undefined): Promise<INote[]> {
        let skip: number | undefined
        let take: number | undefined

        if(page !== undefined) {
            skip = page * NotesService.countTake
            take = NotesService.countTake
        }

        return this.noteDbService.findAll(skip, take)
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
