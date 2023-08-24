import * as AButton from "./ActionButton";

export interface IButton {
    onClick?: () => void;
    content?: string;
    className?: string;
}

export const ActionButton =  AButton.default