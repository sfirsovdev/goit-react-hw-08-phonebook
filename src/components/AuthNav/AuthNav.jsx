import { StyledLink, List } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <List>
        <li>
        <StyledLink to="/login">Login</StyledLink>
      </li>
      <li>
        <StyledLink to="/register">Register</StyledLink>
      </li> 
    </List>
  );
};

export default AuthNav;
