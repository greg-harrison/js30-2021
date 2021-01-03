import React from "react"
import styled from "styled-components"

const Link = styled.a({
    textDecoration: 'none',
    color: '#a09ea9'
})

const Foot = styled.footer({
    textAlign: 'center',
    fontSize: '12px'
})

const Footer = () => (
  <Foot>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
        <Link href="https://github.com/greg-harrison">
            Designed &amp; Built by Greg Harrison
        </Link>
    </div>
  </Foot>
)

export default Footer