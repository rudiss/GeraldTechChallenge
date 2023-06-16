import styled from 'styled-components/native';

interface IMenuIconProps {
  size?: number;
  spacer?: number;
}
export const MenuIcon = styled.Text.attrs({
  children: '☰',
})<IMenuIconProps>`
  font-size: ${({size}) => size};
  margin-top: ${({spacer}) => spacer};
`;
