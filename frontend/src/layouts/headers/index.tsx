// @ts-ignore
import style from "./header.module.scss"
import {ActionButton} from "../../components/buttons";
import {useAppDispatch} from "../../store";
import {setShowForm} from "../../store/reducers/notes-reducer";

const Header = () => {
    const dispatch = useAppDispatch()

    const onAddNote = () => {
        dispatch(setShowForm(true))
    }

    return (
        <header className={ style.header + ' padding d-flex justify-content-between align-items-center' }>
            <h1 className=" h1 text-black">Stay a note =D</h1>
            <ActionButton
                content='Add note'
                onClick={onAddNote}
                className='btn-dark'
            />
        </header>
    )
}

export default Header