import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: block;
  min-width: 100px;
  padding: ${p => p.theme.space[2]};
  color: inherit;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  border-radius: ${p => p.theme.radii.normal};
  background-color: #ffffff;
  text-align: center;
  text-decoration: none;
  transition: color 0.20s ease-in-out, box-shadow 0.10s ease-in-out;
  &.active {
    background-color: rgb(147, 198, 243);
    color: #ffffff;
  }

  &:hover {
    box-shadow: inset 3px -1px 11px -4px #000000;
    color: inherit;
  }

  &:hover.active {
    color: #ffffff;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[3]};
`;
