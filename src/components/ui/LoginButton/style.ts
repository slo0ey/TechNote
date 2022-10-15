import styled from "@emotion/styled";
import { BaseProps } from "types/common.types";

type LoginProps = Pick<BaseProps, 'isDarkMode'>;

const LoginButton = styled.button<LoginProps>`
  width: 5rem;
  height: 2rem;
  align-self: center;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme, isDarkMode }) => (isDarkMode ? theme.dark[1] : theme.light[0])};
  background-color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.light[0] : theme.dark[1]};
  border: 1px solid
    ${({ theme, isDarkMode }) => (isDarkMode ? theme.dark[1] : theme.light[0])};
  border-radius: 1rem;
  cursor: pointer;
`;

export { LoginButton };