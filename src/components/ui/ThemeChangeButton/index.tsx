import { AppTheme } from 'context';
import { useContext } from 'react';
import { BaseProps } from 'types/common.types';
import * as S from './style';

type IconProps = Pick<BaseProps, 'isDarkMode'>;

function LightIcon({ isDarkMode }: IconProps) {
  return <S.LightIcon size="1.5rem" color="#121212" isDarkMode={isDarkMode} />;
}

function DarkIcon({ isDarkMode }: IconProps) {
  return <S.DarkIcon size="1.5rem" color="#ffffff" isDarkMode={isDarkMode} />;
}

function ChangeThemeButton() {
  const { isDarkMode, toggleDarkMode } = useContext(AppTheme);

  return (
    <S.ChangeThemeButton isDarkMode={isDarkMode} onClick={toggleDarkMode}>
      <LightIcon isDarkMode={isDarkMode} />
      <DarkIcon isDarkMode={isDarkMode} />
    </S.ChangeThemeButton>
  );
}

export default ChangeThemeButton;
