import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import styled, { keyframes } from "styled-components"
import { color } from "../style/color"
import { Link, useParams } from "react-router-dom"

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
  padding: 16px;
  border: 4px solid ${color.primary};
  animation: ${rotate} 1s infinite linear;
  border-bottom-color: transparent;
  border-radius: 50%;
`

const QuestionContent = styled.p`
  width: 80%;
  margin: 8px auto 40px auto;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 16px;
`

const Space = styled.span`
  margin-left: 40px;
  margin-right: 40px;
`

function Shiny() {
  const {questionNumber} = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const previousQuestion = (questionNumberInt === 1) ? 1 : (questionNumberInt - 1)
  const nextQuestion = questionNumberInt + 1
  const [surveyData, setSurveyData] = useState()

  useEffect(() => {
    fetch("http://localhost:8000/survey")
      .then(
        res => res.json()
          .then(data => setSurveyData(data['surveyData']))
      )
      .catch(reason => console.log(reason))
  })

  return (
    <React.Fragment>
      <Header></Header>
      <Section>
        <h2>Question</h2>
        <QuestionContent>
          {
            (surveyData != null) ? surveyData[questionNumber] : <Loader/>
          }
        </QuestionContent>
        <div>
          <Link to={'/shiny/' + previousQuestion}>Previous</Link>
          <Space/>
          <Link to={'/shiny/' + nextQuestion}>Next</Link>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Shiny