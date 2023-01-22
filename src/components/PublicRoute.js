import { Route, Navigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors  from 'redux/auth/authSelectors';

export default function PublicRoute({
    children,
    restricted = false,
    redirectTo = '/',
    ...routeProps }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return <Route {...routeProps}>
        {shouldRedirect ? <Navigate to={redirectTo} />: children} 
    </Route>

}