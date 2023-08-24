import {NoteMapper} from "./note-mapper.class";
import * as scripts from './note.scripts'

export default interface Note {
    id?: number,
    name?: string,
    context?: string,
    publishDate?: Date
}

export const noteMapper = new NoteMapper()
export const { equal } = scripts;