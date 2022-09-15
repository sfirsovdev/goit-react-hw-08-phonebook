import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { Container, Button, Email } from './UserMenu.styled';

const UserMenu = () => {
  const email = useSelector(authSelectors.getEmail);
  const dispatch = useDispatch();
  return (
    <Container>
      <Email>{email}</Email>
      <Button type="button" onClick={() => dispatch(authOperations.logout())}>
        Logout
      </Button>
    </Container>
  );
};

export default UserMenu;
