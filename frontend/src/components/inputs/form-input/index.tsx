import {IInput} from "./../";
import React, {memo, useEffect, useRef, useState} from "react";
// @ts-ignore
import style from './form-input.module.scss'

const FormInput = memo(({ id, className, name, text, onChange, placeholder, type, ref } : IInput) => {
    return (
        <div className={style.formInput + ' d-flex align-items-center'}>
            {
                text &&
                <label className='form-labe' htmlFor={name}>
                    { text }
                </label>
            }
            <input
                id={id}
                type={ type || 'text' }
                className={ className +' form-check-input form-control'}
                name={name}
                placeholder={placeholder}
                ref={ref as React.MutableRefObject<HTMLInputElement>}
                onChange={e => onChange && onChange(e.target?.value)}
            />
        </div>
    )
}, (prevProps : IInput, nextProps: IInput) => (
        prevProps.id === nextProps.id &&
        nextProps.ref?.current === prevProps.ref?.current
))

export default FormInput