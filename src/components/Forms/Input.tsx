import * as React from "react";

export interface IInputProps {
    handleChange: (e: any) => void;
    value: string;
}

export const Input: React.FunctionComponent<IInputProps> = (props) => {
    return (
        <input
            type="text"
            value={props.value}
            onChange={props.handleChange}
        />
    );
};
