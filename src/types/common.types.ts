import { ReactNode, ReactPropTypes } from 'react';

export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export type BaseProps = {
  children?: ReactNode;
  isDarkMode: boolean;
  season: Season;
};
