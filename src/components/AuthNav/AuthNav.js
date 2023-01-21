import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register" exact = "true">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login" exact = "true">
        Log In
      </NavLink>
    </div>
  );
};
 export default AuthNav
