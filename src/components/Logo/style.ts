import styled from '@emotion/styled';
import { BaseProps } from 'types/common.types';

type LogoProps = Pick<BaseProps, 'isDarkMode'>;

const Logo = styled.div<LogoProps>`
  align-self: center;
  text-align: center;
  font-size: 2rem;
  font-family: 'Ubuntu', sans-serif;
  color: ${({ theme, isDarkMode }) => (isDarkMode ? theme.light[0] : theme.dark[0])};
`;

export { Logo };
