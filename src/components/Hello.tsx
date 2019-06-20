import * as React from "react";

export interface HelloProps { text: string; }

export const Hello = (props: HelloProps) => (
    <h1>Hello {props.text}!</h1>
);
