import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: #a09ea9;
`

const Headline = styled.span({
  color: "#FFFFFF"
})

const EmphasizedText = styled.span({
  color: "#e4ff00"
})

const StyledRule = styled.hr({
  borderTop: "1px solid #FFFFFF"
})
 
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Headline>
      <h1>Hi Folks!</h1>
      <h3>Following the links below will take you to my solutions for the  
        <EmphasizedText> Javascript 30 </EmphasizedText> coding challenge, created by 
        <EmphasizedText> Wes Bos</EmphasizedText>
      </h3>
    </Headline>
    <StyledRule />
    <StyledLink to="/dayOne/">Day One - Drum Kit</StyledLink>
  </Layout>
)

export default IndexPage
