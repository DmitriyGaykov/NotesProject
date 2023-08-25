import {useEffect, useState} from "react";
import Note from "../../db/models/note";
import NoteBlock from "../../components/note-block";
import {useAppDispatch, useAppSelector} from "../../store";
import {clearNotes} from "../../store/reducers/notes-reducer";
import {getAllAction} from "../../store/reducers/notes-reducer/action";
import {ActionButton} from "../../components/buttons";

const NotesPage = () => {
    const dispatch = useAppDispatch()

    const storeNotes : Note[] = useAppSelector(state => state.notes.notes)

    const [notes, setNotes] = useState<Note[]>([])
    const [i, setI] = useState(0)
    const [showYet, setShowYet] = useState(true)

    const onYet = () => {
        if(storeNotes.length !== 0) {
            dispatch(getAllAction(i))
            setI(i + 1)
        }
    }

    useEffect(() => {
        setNotes([...notes, ...storeNotes])
    }, [storeNotes]);

    useEffect(() => {
        setShowYet(
            storeNotes.length !== 0 &&
            notes.length / i  === storeNotes.length
        )
    }, [notes]);

    useEffect(() => {
        dispatch(getAllAction(i))
        setI(i + 1)

        return () => {
            dispatch(clearNotes())
        }
    }, []);

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
            {
                showYet &&
                <ActionButton
                    content='Yet'
                    onClick={onYet}
                />
            }
        </div>
    )
}

export default NotesPage