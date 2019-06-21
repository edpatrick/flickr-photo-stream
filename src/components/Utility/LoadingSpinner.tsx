import * as React from "react";

import * as Styles from "./Loader.scss";

interface ILoaderProps {
    loading: boolean;
}

export const LoadingSpinner: React.FunctionComponent<ILoaderProps> = (props): JSX.Element | null => {
    const spinner = (
        <div className={Styles.SpinnerContainer}>
            <div className={Styles.Spinner} />
        </div>
    );
    return (props.loading ? spinner : null);
};
