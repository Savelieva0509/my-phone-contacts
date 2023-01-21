import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
       <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
      </label>
      <label className={css.label}>
        Password
        <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
