// @ts-ignore
import style from './add-note-form.module.scss'
import {FormInput} from "../../components/inputs";
import {ActionButton} from "../../components/buttons";
import React, {useCallback, useState} from "react";
import {useMutation} from "@apollo/client";
import {ADD_NOTE} from "../../services/mutations/note";

const AddNoteForm = () => {
    const [name, setName] = useState('')
    const [context, setContext] = useState('')

    const [createNote] = useMutation(ADD_NOTE)

    const onCancel = useCallback(() => {

    }, [])

    const onSend = useCallback(async () => {
        try {
            const {data} = await createNote({
                variables: {
                    input: {
                        name,
                        context
                    }
                }
            })

            console.log(data)
        } catch (e) {
            console.error(e)
        }
    }, [createNote, name, context])

    return (
        <form className={style.addNoteForm + ' d-flex flex-column gap-3'} >
            <h3 className='h3'>Add note!</h3>
            <FormInput
                id='name'
                name='name'
                className='name w-100'
                text='Enter your name:'
                onChange={setName}
            />
            <FormInput
                id='note'
                name='note'
                className='note w-100'
                text='Enter your note:'
                onChange={setContext}
            />
            <div className='d-flex gap-2'>
                <ActionButton
                    className='btn-success'
                    content='Send'
                    key='Send'
                    onClick={onSend}
                />
                <ActionButton
                    className='btn-dark'
                    content='Cancel'
                    onClick={onCancel}
                    key='Cancel'
                />
            </div>
        </form>
    )
}

export default AddNoteForm