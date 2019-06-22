import * as React from "react";
import { Input } from "../components/Forms/Input";
import { ImagePanel } from "../components/Images/ImagePanel";
import { LoadingSpinner } from "../components/Utility/LoadingSpinner";
import { getFlickrImages, IPhotoModel, IRequestModel, IResponseModel } from "../queries/getFlickrImages";

import * as Styles from "./GalleryContainer.scss";

const SearchResults = React.lazy(() => import("../Components/Search/SearchResults"));

interface IState {
    query: IRequestModel;
    photos: IPhotoModel[];
    totalPages: number;
}

export class GalleryContainer extends React.Component<{}, IState> {

    public state: IState = {
        photos: [],
        query: {
            page: 0,
            perPage: 0,
            text: "",
        },
        totalPages: 0,
    };

    public render(): JSX.Element {

        const images = this.state.photos.map((photo, index) => {
            return (
                <ImagePanel
                    key={index}
                    id={photo.id}
                    src={photo.thumbnailUrl}
                    title={photo.title}
                    owner={photo.owner}
                    description={photo.description}
                    tags={photo.tags.split(" ")}
                />
            );
        });

        return (
            <div className={Styles.Container}>
                <div className={Styles.InputContainer}>
                    <h1 className={Styles.Title}>Flickr search</h1>
                    <Input
                        name="Search"
                        placeholder="Search Flickr..."
                        value={this.state.query.text}
                        handleChange={this.handleSearch}
                    />
                </div>
                <React.Suspense fallback={<LoadingSpinner loading={true}/>}>
                    <SearchResults
                        numberOfItems={this.state.photos.length}
                        hasMore={this.hasMoreImages()}
                        loadMore={this.loadMore}
                    >
                        {images}
                    </SearchResults>
                </React.Suspense>
            </div>
        );
    }

    private handleSearch = (e: any) => {
        this.setState({
            query: {
                page: 1,
                perPage: 10,
                text: e.target.value.trim(),
            },
        },
            () => {
                if (this.state.query.text.length > 2) {
                    this.loadImages();
                } else if (this.state.query.text.length === 0) {
                    this.setState({ photos: [] });
                }
            },
        );
    }

    private hasMoreImages = (): boolean => {
        return this.state.query.page < this.state.totalPages;
    }

    private loadMore = (): void => {
        if (this.hasMoreImages()) {
            this.setState((prevState: Pick<IState, "query">) => {
                return {
                    query: {
                        page: prevState.query.page + 1,
                        perPage: this.state.query.perPage,
                        text: this.state.query.text,
                    },
                };
            }, () => {
                this.loadImages(true);
            });
        }
    }

    private loadImages = (paginate?: boolean) => {
        if (this.state.query.text) {
            getFlickrImages(this.state.query).then((data: IResponseModel) => {
                this.setState((prevState) => {
                    return {
                        photos: paginate ? [...prevState.photos, ...data.photos] : data.photos,
                        totalPages: data.pages,
                    };
                });
            });
        }
    }

}
