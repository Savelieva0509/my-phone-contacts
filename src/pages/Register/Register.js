import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/authOperations';
// import css from './Register.module.css';
import { Button, TextField, Box, Container, Typography } from '@mui/material';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    };
    
 return (
    <Container component="div" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor:  'white',
          padding: '20px',
          boxShadow: ' rgb(33 33 33) 0px 2px 10px 1px',
        }}
      >
        <Typography
          variant="h4"
         style={{ fontFamily: 'Segoe UI', fontWeight: '400', color: 'rgb(66, 91, 115)'  }}
        >
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="User name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
            value={email}
            variant="standard"
           onChange={handleChange}
          
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            variant="standard"
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, color: 'white', background: 'd4abca' }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}


export default RegisterForm;
