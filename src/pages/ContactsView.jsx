import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/Contacts';
import { Container, Row, Col } from 'react-bootstrap';

const ContactsView = () => {
  return (
    <Container
      as="main"
      className="shadow p-5 mb-5 "
      style={{ minHeight: '70vh', backgroundColor: '#fff' }}
    >
      <Row>
        <Col></Col>
        <Col xs="auto" md={8} xl={6}>
          <ContactForm />
          <Filter />
          <ContactList />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default ContactsView;
