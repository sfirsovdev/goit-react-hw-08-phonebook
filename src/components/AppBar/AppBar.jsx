import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { GiAbstract069 } from 'react-icons/gi';
import { Navbar, Container } from 'react-bootstrap';


const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar
      as="header"
      expand="lg"
      className="mb-5 pt-3 pb-3 bg-dark shadow"
    >
      <Container>
        <p className="d-flex align-items-center text-white fs-2">
          <b>Phone</b>Book
          <GiAbstract069 className="me-2" />
        </p>
        <div className="ms-auto">{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
      </Container>
    </Navbar>
  );
};

export default AppBar;
