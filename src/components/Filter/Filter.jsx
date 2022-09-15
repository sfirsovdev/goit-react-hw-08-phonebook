import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, contactsSelectors } from 'redux/contacts';
import { Container, Form } from 'react-bootstrap';

const Filter = () => {
  const filter = useSelector(contactsSelectors.getChangedFilter);
  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <Container className="mb-4">
      <Form>
        <Form.Group className="d-flex align-items-baseline">
          <Form.Label
            htmlFor="filter"
            className="fs-5 me-5 fw-bold text-secondary"
            style={{ minWidth: '70px' }}
          >
            Filter
          </Form.Label>
          <Form.Control
            type="text"
            name="filter"
            value={filter}
            onChange={handleFilter}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Filter;
