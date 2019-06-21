import * as React from "react";

import * as Styles from "./Tag.scss";

export interface IPropsTag {
    text: string;
}

export const Tag: React.FunctionComponent<IPropsTag> = (props) => {
    return <div className={Styles.Tag}>{props.text}</div>;
};
