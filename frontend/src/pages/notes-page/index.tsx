import {useState} from "react";
import Note from "../../db/models/note";
import NoteBlock from "../../components/note-block";

const NotesPage = () => {
    const [notes, setNotes] = useState<Note[]>([{
        id: 1,
        name: 'Dima',
        context: 'Hello world',
        publishDate: new Date()
    }])

    return (
        <div className='container d-flex flex-column gap-sm-2 w-100'>
            {
                notes?.map(note =>
                    <NoteBlock
                        id={note.id}
                        name={note.name}
                        context={note.context}
                        publishDate={note.publishDate}
                        key={note.id}
                    />)
            }
        </div>
    )
}

export default NotesPage