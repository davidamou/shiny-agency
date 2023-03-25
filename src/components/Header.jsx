import logo from '../assets/logo.svg'
import styled from "styled-components"
import {color} from "../style/color";
import Button from "../style/Button";
import {Link} from "react-router-dom";

function Header() {
    const Header = styled.header`
      display: flex;
      margin: auto;
      justify-content: space-between;
      padding: 0.5em 2em 0.5em 2em;

      @media (max-width: 800px) {
        padding: 0;
      }
    `
    const Title = styled.div`
      display: flex;
      align-items: center;
    `
    const Logo = styled.img`
      margin-right: 12px;
      width: 3em;
      height: 3em;
      @media (max-width: 800px) {
        margin-left: 1em;
      }
    `
    const Nav = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 800px) {
        display: none;
      }
    `
    const NavLink = styled(Link)`
      margin-left: 1em;
      margin-right: 1em;
      text-decoration: none;
      color: ${color.secondary};
    `

    return (
        <Header>
            <Title>
                <Logo src={logo}/>
                <h1>Shiny</h1>
            </Title>
            <Nav>
                <NavLink to={'/'}>Accueil</NavLink>
                <NavLink to={'/'}>Profils</NavLink>
                <Button to={'/shiny'}>Faire le test</Button>
            </Nav>
        </Header>
    );
}

export default Header;