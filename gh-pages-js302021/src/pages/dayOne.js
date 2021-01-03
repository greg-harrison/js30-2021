import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DayOneCrowd from "../images/d1-background.jpg"

const DayOne = () => {
return (
  <Layout>
    <SEO title="day one" />
    <div style={{ 
        background: `url(${DayOneCrowd})`,
        height: '100vh'
      }}>
        
    </div>
  </Layout>
)
}

export default DayOne
