import React from "react";

export default interface IReferable<T> {
    ref?: React.MutableRefObject<T | null>
}