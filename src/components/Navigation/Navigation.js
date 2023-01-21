import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

const Navigation = () => {
    return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
    </nav>
  );
};

export default Navigation
