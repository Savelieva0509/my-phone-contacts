import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { clsx } from 'clsx';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  
  return (
    <nav>
      <NavLink className={({isActive})=>isActive? clsx(css.link,css.active) :css.link} to="/">Home</NavLink>
        {isLoggedIn && <NavLink className={({isActive})=>isActive? clsx(css.link,css.active) :css.link} to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
