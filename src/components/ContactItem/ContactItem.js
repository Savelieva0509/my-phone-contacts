// import IconButton from 'components/IconButton/IconButton';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Button } from '@mui/material';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <li key={id} className={css.contactsList__item}>
      <p>
        {name}: {number}
      </p>

      <Button
        onClick={() => onDeleteContact(id)}
        type="submit"
        variant="contained"
        size="small"
        sx={{ mt: 3, color: 'white', background: 'd4abca' }}
      >
        <DeleteIcon className={css.deleteIcon} />
        DELETE
      </Button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
