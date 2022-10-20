import { AppTheme } from 'context';
import { useContext } from 'react';
import LoginButton from 'components/LoginButton';
import Logo from 'components/Logo';
import ChangeThemeButton from 'components/ThemeChangeButton';
import * as S from './style';
import SearchButton from 'components/SearchButton';

function Header() {
  const appTheme = useContext(AppTheme);

  return (
    <S.Header {...appTheme}>
      <S.AbsoluteHeader>
        <Logo />
        <S.ButtonGroup>
          <SearchButton />
          <ChangeThemeButton />
          <LoginButton />
        </S.ButtonGroup>
      </S.AbsoluteHeader>
    </S.Header>
  );
}

export default Header;
