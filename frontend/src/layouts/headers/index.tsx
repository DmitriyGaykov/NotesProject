// @ts-ignore
import style from "./header.module.scss"
import {ActionButton} from "../../components/buttons";

const Header = () => {
    return (
        <header className={ style.header + ' padding d-flex justify-content-between align-items-center' }>
            <h1 className=" h1 text-black">Stay a note =D</h1>
            <ActionButton content='Add note'/>
        </header>
    )
}

export default Header