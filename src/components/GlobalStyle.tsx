import { Global, css } from '@emotion/react';

const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
