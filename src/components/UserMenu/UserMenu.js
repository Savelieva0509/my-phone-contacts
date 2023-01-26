import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.userWwrapper}>
      <p className={css.userName}>Welcome,{user.name}</p>
      <Button
        type="button"
        height="auto"
        variant="contained"
        size="small"
        onClick={() => dispatch(logOut())}
        sx={{
          height: '100%',
          color: 'white',
          background: 'd4abca',
        }}
      >
        LogOut
      </Button>
    </div>
  );
};

export default UserMenu;
