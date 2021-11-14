import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ path, ...otherProps }) => {
    const token = localStorage.getItem('app_token');

    if (path == '/') {
        return <Redirect to={{ pathname: "/home" }} />
    }

    if ((path == '/login' || path == '/SignUp') && token) {
        return <Redirect to={{ pathname: "/home" }} />
    }

    if (!(path == '/login' || path == '/SignUp') ||
        ((path == '/login' || path == '/SignUp') && !token)) {
        return <Route {...otherProps} />
    }
};

export default ProtectedRoute;
