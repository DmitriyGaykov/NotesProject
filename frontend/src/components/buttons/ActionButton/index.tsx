import {IButton} from "../index";
import {Button} from "react-bootstrap";

const ActionButton = ({ onClick, content, className } : IButton) => {
    return (
        <Button
            onClick={onClick}
            className={className + ' text-white btn-dark btn '}
        >
            { content }
        </Button>
    )
}

export default ActionButton