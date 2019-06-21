import * as React from "react";

interface ILoaderProps {
    loading: boolean;
}

export const Loader: React.FunctionComponent<ILoaderProps> = (props): JSX.Element | null => {
    return (props.loading ? <div>loading...</div> : null);
};
