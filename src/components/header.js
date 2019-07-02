import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from "../images/logo.svg"
import ErrorBoundary from "./errorBoundary"
import Styled from "styled-components"

const HeaderWrapper = Styled.div`
  background: #524763;
  img {
    margin: 0 0px 0 0;
  }
`
const HeaderContainer = Styled.div`
margin: 0 auto;
max-width: 960;
padding: 0.5rem;
`

const Header = ({ siteTitle }) => (
  <ErrorBoundary>
    <HeaderWrapper>
      <HeaderContainer>
        <Link
          to="/"
          style={{
            margin: "0px",
            color: "white",
            textDecoration: "none",
          }}>
          <img style={{ width: "150px" }} src={Logo} alt="logo" />
        </Link>
        <h1
          style={{
            color: "white",
            display: "inline-block",
            marginLeft: "21vw",
            marginBottom: "5px",
          }}>
          {siteTitle}
        </h1>
      </HeaderContainer>
    </HeaderWrapper>
  </ErrorBoundary>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
