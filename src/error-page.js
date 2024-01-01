import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="p-2">          
            <div className="alert alert-success container" role="alert">
                <h4 className="alert-heading"><i>{error.statusText || error.message}</i></h4>
                <h1>Oops!</h1>
                <hr/>
                <p>Sorry, an unexpected error has occurred.</p><a href="/">Go Back</a>
            </div>
        </div>
    );
}