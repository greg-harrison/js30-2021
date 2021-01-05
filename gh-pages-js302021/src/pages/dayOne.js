import React, { cloneElement } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DayOneCrowd from "../images/d1-background.jpg"
import boom from "../assets/dayone/sounds/boom.wav"
import styled from "styled-components"

const Container = styled.div({
  background: `url(${DayOneCrowd})`,
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const EmphasizedText = styled.span({
  color: "#e4ff00"
})



const onKeyPressed = (e) => {
  console.log(e)
  const myRef = React.createRef();
  const audio = new Audio(boom);

  audio.play();
  return (
    <audio ref={myRef} src={boom} autoPlay />
  )
}

class DayOne extends React.Component {
  componentDidMount() {
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <Layout>
        <SEO title="day one" />
        <Container>
          Test
        <button onKeyDown={onKeyPressed}> HELLO </button>
          {/* KBD for inputs */}
        </Container>
      </Layout>
    );
  }
}

export default DayOne
