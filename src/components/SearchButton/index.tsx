import { AppTheme } from 'context';
import { useContext } from 'react';
import { BaseProps } from 'types/common.types';
import * as S from './style';

type IconProps = Pick<BaseProps, 'isDarkMode'>;

function Icon({ isDarkMode }: IconProps) {
  return <S.SearchIcon size="1.5rem" color={isDarkMode ? '#FFFFFF' : '#121212'} />;
}

function SearchButton() {
  const { isDarkMode } = useContext(AppTheme);

  return (
    <S.SearchButton>
      <Icon isDarkMode={isDarkMode} />
    </S.SearchButton>
  );
}

export default SearchButton;
