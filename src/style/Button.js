import styled from "styled-components";
import {color} from "./color";
import {Link} from "react-router-dom";

const Button = styled(Link)`
  color: white;
  border-radius: 5em;
  border: 0;
  text-decoration: none;
  padding: 0.5em 2em 0.5em 2em;
  background-color: ${color.primary};
  transition: background-color linear 200ms;
  &:hover {
    background-color: ${color.onPrimary};
  }
`

export default Button;