import * as React from "react";
import { Image, IProps as IPropsImage } from "./Image";

import * as Styles from "./Image.scss";

// console.log("yolo");
console.log(Styles);

interface IOwner {
    name: string;
    id: string;
}

export interface IProps extends IPropsImage {
    id: number;
    owner: IOwner;
    description: string;
}

export const ImagePanel: React.FunctionComponent<IProps> = (props: IProps) => {
    return (
        <div className={Styles.container}>
            <Image src={props.src} title={props.title} />
            <p>title: {props.title}</p>
            <p>owner name: {props.owner.name}</p>
            <p>owner name: {props.description}</p>
            <p>owner url: {`https://www.flickr.com/people/${props.owner.id}/`}</p>
        </div>
    );
};