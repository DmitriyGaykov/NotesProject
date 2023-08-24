import Note, {equal} from "../../db/models/note";
import {memo} from "react";

// @ts-ignore
import style from './note-block.module.scss'

const NoteBlock = memo(({ id, name, context, publishDate } : Note) => {
    return (
        <div className='d-flex w-100 g-3 ' id={id?.toString()}>
            <div className={ style.nameAndDate + ' d-flex flex-column gap-1 bg-opacity-10' }>
                <span className='name fw-bold text-white'>{ name }</span>
                <span className='date text-white'>{ publishDate?.toLocaleDateString() }</span>
            </div>
            <div className={style.context + ' text-black'}>
                { context }
            </div>
        </div>
    )
}, (prevProps: Note, nextProps: Note) => equal(nextProps, prevProps))

export default NoteBlock