export interface INote {
    id: number;
    name: string;
    context: string;
    publishDate: Date;
}

export interface INoteDto {
    name: string;
    context: string;
}

export interface IPatchNoteDto {
    id: number;
    name?: string;
    context?: string;
}

export const DEFAULT_NOTE : INote = {
    id: -1,
    name: '',
    context: '',
    publishDate: new Date()
}

export interface INoteService {
    findAll() : Promise<INote[]>;
    findById(id : number) : Promise<INote>;
    add(note : INoteDto) : Promise<INote>;
    remove(id : number) : Promise<INote>;
    update(note : IPatchNoteDto) : Promise<INote>;
}