import * as FInput from './form-input'
import IReferable from "../../interfaces/IReferable";
import {ChangeEvent} from "react";

export interface IInput extends IReferable<HTMLInputElement>{
    text?: string;
    placeholder?: string;
    className?: string;
    id?: string;
    name?: string;
    type?: 'text' | 'number' | 'file',
    onChange?: (value : any) => void
}

export const FormInput = FInput.default