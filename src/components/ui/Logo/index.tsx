import { AppTheme } from 'context';
import { useContext } from 'react';
import * as S from './style';

function Logo() {
  const appTheme = useContext(AppTheme);
  return <S.Logo {...appTheme}>TechNote.</S.Logo>;
}

export default Logo;
