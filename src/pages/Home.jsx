import Header from "../components/Header"
import styled from "styled-components"
import question from "../assets/questions.svg"
import Button from "../style/Button"
import React from "react"
import { Color } from "../components/ThemeMode"

const Section = styled.section`
  margin: 1em 2em 0 2em;
  background-color: ${Color.canvasColor};
  padding: 3em 8em 3em 8em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1em 2em 1em 2em;
    margin: 0.5em 1em 0 1em;
  }
`

const Space = styled.div`
  width: 4em;
  @media (max-width: 800px) {
    width: 0;
    height: 2em;
  }
`

const Text = styled.h2`
  font-size: 3rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`
const TextContainer = styled.div`
  width: 49%;
  @media (max-width: 1080px) {
    width: 100%;
  }
`

const Image = styled.img`
  width: 51%;
  @media (max-width: 1080px) {
    width: 100%;
  }
`

document.title = 'Home';

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Section>
        <TextContainer>
          <Text>
            Identify your needs, we take care of the rest, with the best talents.
          </Text>
          <Button to={"/shiny/1"}>Take the test</Button>
        </TextContainer>
        <Space />
        <Image src={question} />
      </Section>
    </React.Fragment>
  )
}

export default Home
