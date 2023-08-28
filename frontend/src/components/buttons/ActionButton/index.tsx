import {IButton} from "../index";
import {Button} from "react-bootstrap";
import {memo} from "react";

const ActionButton = memo(({ onClick, content, className } : IButton) => {
    return (
        <Button
            onClick={onClick}
            className={className + ' text-white btn '}
        >
            { content }
        </Button>
    )
})

export default ActionButton