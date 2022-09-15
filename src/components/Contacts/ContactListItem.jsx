import PropTypes from 'prop-types';
import {Button, ListGroup } from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/bs';

const ContactListItem = ({ id, name, number, deleteHandler }) => {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-end bg-light py-1 mb-1 fw-bold border-bottom border-2 border-white "
    >
      <p style={{ flexBasis: '50%' }}> {name}</p>{' '}
      <p style={{ flexBasis: '40%' }}>{number}</p>
      <Button
        type="button"
        aria-label="Delete"
        onClick={() => deleteHandler(id)}
        className="px-3 py-1"
      >
        <BsFillTrashFill />
      </Button>
    </ListGroup.Item>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};
