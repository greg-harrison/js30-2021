/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="site">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`}
          style={{
            margin: `0 auto`,
            padding: `0 1.0875rem 1.45rem`,
          }}
        />
          <div className="site-content">{children}</div>
        <Footer></Footer>
      </div>
    </>
  )
}
 
Layout.propTypes = {
        children: PropTypes.node.isRequired,
}

export default Layout
