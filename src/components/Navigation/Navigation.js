import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors  from 'redux/auth/authSelectors';

import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
