import {useCallback, useEffect, useState} from "react";
import Note, {noteMapper} from "../../db/models/note";
import NoteBlock from "../../components/note-block";
import {ActionButton} from "../../components/buttons";
import {useQuery} from "@apollo/client";
import {FIND_ALL_NOTES} from "../../services/queries/note";

const NotesPage = () => {
    const [showYet, setShowYet] = useState(true)
    const [notes, setNotes] = useState<Note[]>([])
    const [i, setI] = useState(1)

    const { data, loading, error, refetch } = useQuery(FIND_ALL_NOTES, {
        variables: {
            page: i + 1
        }
    })

    useEffect(() => {
        if(!loading && data) {
            const findAllRes = data?.findAll as Note[]
            const _notes = noteMapper.map(findAllRes) as Note[]
            setNotes([...notes, ..._notes])
        }
    }, [loading, data]);

    useEffect(() => {
        const findAllRes = data?.findAll as Note[];

        if(findAllRes) {
            setShowYet(
                findAllRes.length !== 0 &&
                notes.length / i === findAllRes.length
            )
        }
    }, [notes]);

    const onYet = useCallback(async () => {
        try {
            setI(i + 1)

            await refetch({
                page: i - 1
            })
        } catch(e) {
            console.error(e)
        }
    }, [i])

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