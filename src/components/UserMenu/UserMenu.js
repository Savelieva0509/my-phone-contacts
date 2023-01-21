import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
// import { useAuth } from 'hooks';
import css from './UserMenu.module.css';


const UserMenu = () => {
  const dispatch = useDispatch();
//   const { user } = useAuth();
const name = useSelector(authSelectors.getUsername)
    // const avatar = defaultAvatar

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome,{name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu


