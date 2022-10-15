import { createContext } from 'react';
import { Season } from 'types/common.types';

export const AppTheme = createContext({
  season: 'spring' as Season,
  isDarkMode: false,
  toggleDarkMode: () => {},
});
