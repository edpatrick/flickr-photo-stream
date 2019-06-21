import * as React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoadingSpinner } from "../Utility/LoadingSpinner";

import * as Styles from "./SearchResults.scss";

export interface ISearchResultsProps {
    numberOfItems: number;
    hasMore: boolean;
    loadMore: () => void;
    children: React.ReactNode;
}

export const SearchResults: React.FunctionComponent<ISearchResultsProps> = (props) => {
    const loadingComponent = <div className={Styles.LoaderContainer}><LoadingSpinner loading={true}/></div>;
    return (
        <div>
        <InfiniteScroll
            className={Styles.Container}
            dataLength={props.numberOfItems}
            hasMore={props.hasMore}
            next={props.loadMore}
            loader={loadingComponent}
        >
            {props.children}
        </InfiniteScroll>
    </div>
    );
};

export default SearchResults;
