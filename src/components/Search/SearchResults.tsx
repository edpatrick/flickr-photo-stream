import * as React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {Loader} from "../Utility/Loader";

export interface ISearchResultsProps {
    numberOfItems: number;
    hasMore: boolean;
    loadMore: () => void;
    children: React.ReactNode;
}

export const SearchResults: React.FunctionComponent<ISearchResultsProps> = (props) => {
    return (
        <div>
        <InfiniteScroll
            dataLength={props.numberOfItems}
            hasMore={props.hasMore}
            next={props.loadMore}
            loader={<Loader loading={true}/>}
        >
            {props.children}
        </InfiniteScroll>
    </div>
    );
};

export default SearchResults;
