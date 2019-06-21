import * as React from "react";
import { IOwnerModel } from "../../queries/getFlickrImages";
import { Tag } from "../Tag/Tag";
import { Image, IProps as IPropsImage } from "./Image";

import * as Styles from "./Image.scss";

export interface IProps extends IPropsImage {
    id: string;
    owner: IOwnerModel;
    description?: string;
    tags?: string[];
}

export const ImagePanel: React.FunctionComponent<IProps> = (props) => {

    const image = <Image src={props.src} title={props.title} />;
    const bio = (
        <div className={Styles.ImageBio}>
            <a href={props.src} >{props.title}</a>
            <span className={Styles.ImageOwner}>{" by "}
                <a href={`https://www.flickr.com/people/${props.owner.id}/`}>
                    {props.owner.name}
                </a>
            </span>
        </div>
    );
    const description = props.description ? <div className={Styles.ImageDescription}>{props.description}</div>: null;
    let tags = null;
    if (props.tags) {
        tags = props.tags.map((tag, index) => <Tag key={index} text={tag} />);
    }

    return (
        <div className={Styles.Container}>
            {image}
            {bio}
            {description}
            {tags}
        </div>
    );
};
