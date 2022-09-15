import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { Container, Button, Form } from 'react-bootstrap';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const checkDuplicates = name => {
    const allNames = contacts.map(contact => contact.name);

    if (allNames.includes(name)) {
      Notify.failure(`${name} is already in contacts`);
      return true;
    }
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (checkDuplicates(name)) {
      return;
    }

    dispatch(contactsOperations.addContact({ id: nanoid(), name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Container
      fluid
      className="border-bottom border-2 border-secondary pb-4 mb-4"
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group className="d-flex align-items-baseline mb-3">
          <Form.Label
            htmlFor="name"
            className="me-5 fs-5 fw-bold text-secondary"
            style={{ minWidth: '60px' }}
          >
            Name
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="d-flex align-items-baseline mb-3">
          <Form.Label
            htmlFor="number"
            className="me-5 fs-5 fw-bold text-secondary"
            style={{ minWidth: '70px' }}
          >
            Number
          </Form.Label>
          <Form.Control
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" className="ms-auto d-block">
          Add contact
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
