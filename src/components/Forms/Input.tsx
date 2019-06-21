import * as React from "react";

import * as Styles from "./Input.scss";

export interface IInputProps {
    handleChange: (e: any) => void;
    value: string;
    name: string;
    placeholder?: string;
}

export const Input: React.FunctionComponent<IInputProps> = (props) => {
    return (
        <input
            className={Styles.Input}
            type="text"
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            name={props.name}
        />
    );
};
