import * as React from "react";
import LazyLoad from 'react-lazyload';



export interface IProps {
    src: string;
    title: string;
}

// export default class Image extends React.Component<IProps> {

//     public render(): JSX.Element {
//         return <img src={this.props.src} alt={this.props.title}/>;
//     }
// }

export const Image: React.FunctionComponent<IProps> = (props: IProps) => {
    // check for defined / null // onError
    // Add on error
    return (
        <LazyLoad
            height={240}
            scroll={true}
        >
            <img src={props.src} alt={props.title} />
        </LazyLoad>
    );
}

// export default Image;

// export default Image as React.ComponentType<any>;