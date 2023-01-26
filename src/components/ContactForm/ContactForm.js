import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { Button, TextField, Box, Container} from '@mui/material';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;

      case 'number':
        setNumber(event.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.currentTarget.name;

    if (
      contacts.find(elem => elem.name.toLowerCase() === value.toLowerCase())
    ) {
      return alert(`${value} is already in contacts`);
    }

    reset();
    dispatch(addContact({ name, number }));
    console.log(number);
  };

  const reset = () => {
    setName('');
    setNumber('');
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
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Name"
        name="name"
        autoComplete="name"
        autoFocus
        value={name}
        type="text"
        variant="standard"
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="number"
        label="Number"
        type="tel"
        value={number}
        variant="standard"
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, color: 'white', background: 'd4abca' }}
          >
        Add contact
          </Button>
        </Box>
      </Box>
  </Container>
  );
}
