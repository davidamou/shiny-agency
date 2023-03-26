import styled from "styled-components";
import {Link} from "react-router-dom";
import { Color } from "../components/ThemeMode"

const Button = styled(Link)`
  color: white;
  border-radius: 5em;
  border: 0;
  text-decoration: none;
  padding: 0.5em 2em 0.5em 2em;
  background-color: ${Color.primary};
  transition: background-color linear 200ms;
  &:hover {
    background-color: ${Color.onPrimary};
  }
`

export default Button;