import IMapper from "../../../interfaces/IMapper";
import Note from "./";

export class NoteMapper implements IMapper<Note> {
    map(obj: any): Note {
        const note : Note = {}

        const { id, name, context, publishDate } = obj;

        if(id) {
            note['id'] = Number(id)
        }
        if(name) {
            note['name'] = name
        }
        if(context) {
            note['context'] = context
        }
        if(publishDate) {
            note['publishDate'] = new Date(publishDate)
        }

        return note;
    }
}