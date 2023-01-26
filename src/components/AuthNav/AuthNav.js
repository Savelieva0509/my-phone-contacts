import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { clsx } from 'clsx';

const AuthNav = () => {
  return (
    <div>
       <NavLink className={({isActive})=>isActive? clsx(css.link,css.active) :css.link} to="/login">Login</NavLink>
       <NavLink className={({isActive})=>isActive? clsx(css.link,css.active) :css.link} to="/register">Register</NavLink>
    </div>
  );
};
export default AuthNav;
