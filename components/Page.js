import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
  lightblue: "#9ed2ff",
  blue: "#4dadfe",
  black: "#193e5d",
  grey: "#3a3a3a",
  lightgrey: "#b1c0e0",
  white: "#e8f4ff",
  offWhite: "#ededed",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.21)"
};

const StyledPage = styled.div`
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  @media (max-width: 760px) {
    padding: 0;
  }
`;

injectGlobal`
  @font-face {
    font-family: 'DoHyeon-Regular';
    src: url('/static/DoHyeon-Regular.ttf')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: #e8f4ff52;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'DoHyeon-Regular';
  }
  a {
    text-decoration: none;
    color: ${theme.black}
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
