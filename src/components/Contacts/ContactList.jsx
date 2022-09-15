import { useEffect } from 'react';
import ContactListItem from './ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { ListGroup } from 'react-bootstrap';

const ContactList = () => {
  const filter = useSelector(contactsSelectors.getChangedFilter);
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const filterContacts = () => {
    const normalizedFilter = filter?.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteHandler = id => {
    dispatch(contactsOperations.deleteContact(id));
  };

  const visibleContacts = filterContacts();

  return (
    <>
      {visibleContacts.length > 0 ? (
        <ListGroup as="ul">
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <ContactListItem
                key={id}
                id={id}
                name={name}
                number={number}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </ListGroup>
      ) : (
        <div className="fw-bold ps-5">No contacts</div>
      )}
    </>
  );
};

export default ContactList;
