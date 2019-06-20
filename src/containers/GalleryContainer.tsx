import * as React from "react";
import axios from "axios";

import { Image } from "../components/Image";
import { ImagePanel } from "../components/ImagePanel";



// What to lazy load - if have search can lazy load the gallery images
// const Image = React.lazy(() => import ("../Components/Image"));
// needs default export 

interface IState {
    photos: any;
}

interface IPhotoModel {
    id: number;
    title: string;
}

interface IPhotosModel {
    [key: string]: IPhotoModel;
}

interface IResponseModel {
    photos: {
        page: number;
        pages: number;
        perpage: number;
        photos: IPhotosModel;
    };
    stat: string;
}

export class GalleryContainer extends React.Component<{}, IState> {

    public state: IState = {
        photos: [],
    };

    public componentDidMount() {
        axios.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=3f25176d6dfe7531e3f98c38ddecffc1&text=dogs&safe_search=1&format=json&nojsoncallback=1&per_page=20&extras=owner_name,url_s,description")
            .then((response) => {
                this.setState({ photos: response.data.photos.photo });
            })
            .catch(error => {
                console.log(error);
            });
    }

    public render(): JSX.Element {
        console.log(this.state);
        const images = this.state.photos.map((img: any) => {
            const owner = { name: img.ownername, id: img.owner };
            // check img.description is defined
            return (
                <ImagePanel
                    key={img.id}
                    id={img.id}
                    src={img.url_s}
                    title={img.title}
                    owner={owner}
                    description={img.description.content}
                />
            );
        });
        return (
            <div>
                Gallery
                <div>
                    {images}
                </div>
            </div>
        );
    }
}
