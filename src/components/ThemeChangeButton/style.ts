import styled from '@emotion/styled';
import { BaseProps } from 'types/common.types';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';

type ThemeChangeButtonProps = Pick<BaseProps, 'isDarkMode'>;
type IconProps = Pick<BaseProps, 'isDarkMode'>;

const ChangeThemeButton = styled.button<ThemeChangeButtonProps>`
  width: 2rem;
  height: 2rem;
  position: relative;
  padding: auto;
  align-self: center;
  text-align: center;
  background-color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.dark[1] : theme.light[0]};
  border: 0px;
  border-radius: 50%;
  cursor: pointer;
`;

const LightIcon = styled(BsSunFill)<IconProps>`
  opacity: ${({ isDarkMode }) => (!isDarkMode ? '100%' : '0%')};
  position: absolute;
  left: 0.25rem;
  top: 0.25rem;
  color: ${({ theme }) => theme.dark[1]};
`;

const DarkIcon = styled(BsMoonStarsFill)<IconProps>`
  opacity: ${({ isDarkMode }) => (isDarkMode ? '100%' : '0%')};
  position: absolute;
  left: 0.25rem;
  top: 0.25rem;
  color: ${({ theme }) => theme.light[0]};
`;

export { ChangeThemeButton, LightIcon, DarkIcon };
