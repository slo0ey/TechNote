import { AppTheme } from 'context';
import { useContext } from 'react';
import * as S from './style';

function LoginButton() {
  const appTheme = useContext(AppTheme);
  return <S.LoginButton {...appTheme}>로그인</S.LoginButton>;
}

export default LoginButton;
