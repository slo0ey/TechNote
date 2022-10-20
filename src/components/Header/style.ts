import styled from '@emotion/styled';
import { BaseProps } from 'types/common.types';

type HeaderProps = Pick<BaseProps, 'season' | 'isDarkMode'>;

const Header = styled.header<HeaderProps>`
  width: 100%;
  height: 4rem;
  background: ${({ theme, isDarkMode }) => (isDarkMode ? theme.dark[1] : theme.light[0])};
  border-bottom: 1px solid ${({ theme }) => theme.light[1]};
`;

const AbsoluteHeader = styled.div`
  width: 1280px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonGroup = styled.div`
  height: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
`;

export { Header, AbsoluteHeader, ButtonGroup };
