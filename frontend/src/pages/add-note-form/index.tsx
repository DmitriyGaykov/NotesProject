// @ts-ignore
import style from './add-note-form.module.scss'

const AddNoteForm = () => {
    return (
        <form className={style.addNoteForm + ' d-flex flex-column gap-3'} >
            <h3 className='h3'>Add note!</h3>
        </form>
    )
}

export default AddNoteForm