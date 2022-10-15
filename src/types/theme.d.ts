import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    light: string[];
    dark: string[];
    spring: {
      primary1: string;
      primary2: string;
      primary3: string;
    };
    summer: {
      primary1: string;
      primary2: string;
      primary3: string;
    };
    autumn: {
      primary1: string;
      primary2: string;
      primary3: string;
    };
    winter: {
      primary1: string;
      primary2: string;
      primary3: string;
    };
  }
}
