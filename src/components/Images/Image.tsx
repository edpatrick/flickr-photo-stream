import * as React from "react";
import LazyLoad from "react-lazyload";

import * as Styles from "./Image.scss";

export interface IProps {
    src: string;
    title: string;
}

export const Image: React.FunctionComponent<IProps> = (props) => {
    return (
        <LazyLoad
            height={240}
            scroll={true}
        >
            <img className={Styles.Image} src={props.src} alt={props.title} />
        </LazyLoad>
    );
};
