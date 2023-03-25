import React from "react";
import Header from "../components/Header";
import styled, {keyframes} from "styled-components";
import {color} from "../style/color";

function Shiny() {
    const Section = styled.section`
      display: flex;
      flex-direction: column;
      align-items: center;
    `
    const rotate = keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    `
    const Loader = styled.div`
      width: 0;
      height: 0;
      padding: 20px;
      border: 8px solid ${color.primary};
      animation: ${rotate} 1s infinite linear;
      border-bottom-color: transparent;
      border-radius: 50%;
    `

    return (<React.Fragment>
        <Header></Header>
        <Section>
            <Loader/>
            <h2>Question</h2>
            <p>Votre application doit-elle impérativement apparaître en premier dans les résultats de recherche ?</p>
        </Section>
    </React.Fragment>)
}

export default Shiny