import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[5]};
`;

export const Button = styled.button`
  display: block;
  min-width: 100px;
  padding: ${p => p.theme.space[3]};
  color: #ffffff;
  background-color: rgb(147, 198, 243);
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  text-align: center;
  text-decoration: none;
  transition: color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    box-shadow: inset 2px -1px 11px -4px #000000;
  }
`;

export const Email = styled.p`
  color: #ffffff;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
