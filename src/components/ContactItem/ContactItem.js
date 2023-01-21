import IconButton from 'components/IconButton/IconButton';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <li key={id} className={css.contactsList__item}>
      <p>
        {name}: {phone}
      </p>

      <IconButton
        className={css.contactsList__button}
        onClick={() => onDeleteContact(id)}
      >
        <DeleteIcon
          className={css.deleteIcon}
          width="20"
          height="20"
          fill="#fff"
        />
        Delete
      </IconButton>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
