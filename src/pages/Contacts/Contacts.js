import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactList  from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { getIsLoading } from 'redux/contacts/contactsSelectors';
import Spinner from 'components/Spinner/Spinner'

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
          <ContactForm />
           <Filter />
      <div>{isLoading && <Spinner/>}</div>
      <ContactList/>
    </>
  );
}
