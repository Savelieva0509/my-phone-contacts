import { Route, Navigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors  from 'redux/auth/authSelectors';

export default function PrivateRoute({ children,
    redirectTo = '/',
    ...routeProps }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return <Route {...routeProps}>
        {isLoggedIn ? children : <Navigate to={redirectTo} />}
    </Route>

}