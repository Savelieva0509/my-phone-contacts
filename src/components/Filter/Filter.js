import { useSelector, useDispatch } from 'react-redux';
// import css from './Filter.module.css';
import { getFilter } from 'redux/contacts/contactsSelectors';
import { changeFilter } from 'redux/contacts/filterSlice';
import { TextField, Box, Container, Typography } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = event =>
    dispatch(changeFilter(event.target.value));

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
          style={{ fontFamily: 'Segoe UI', fontWeight: '400', color: 'rgb(66, 91, 115)' }}
        >
         Find contact by name
        </Typography>
      <TextField
            margin="normal"
            required
            fullWidth
            label="Enter the name"
            name="user-text"
            autoComplete="name"
            autoFocus
            value={filter}
            variant="standard"
            onChange={handleFilterChange}
          />
    </Box>
    </Container>
  );
}

export default Filter;
