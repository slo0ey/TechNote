import styled from '@emotion/styled';
import { BaseProps } from 'types/common.types';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';

type ThemeChangeButtonProps = Pick<BaseProps, 'isDarkMode'>;
type IconProps = Pick<BaseProps, 'isDarkMode'>;

const ChangeThemeButton = styled.button<ThemeChangeButtonProps>`
  width: 2rem;
  height: 2rem;
  position: relative;
  margin: auto 1rem auto 0.5rem;
  padding: auto;
  align-self: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
  cursor: pointer;
`;

const LightIcon = styled(BsSunFill)<IconProps>`
  opacity: ${({ isDarkMode }) => (!isDarkMode ? '100%' : '0%')};
  position: absolute;
  left: 0.25rem;
  top: 0.25rem;
`;

const DarkIcon = styled(BsMoonStarsFill)<IconProps>`
  opacity: ${({ isDarkMode }) => (isDarkMode ? '100%' : '0%')};
  position: absolute;
  left: 0.25rem;
  top: 0.25rem;
`;

export { ChangeThemeButton, LightIcon, DarkIcon };
