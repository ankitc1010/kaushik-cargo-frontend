import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./head";
import Meta from "./head";
import Nav from "./nav";

const theme = {
  primary: "#065481",
  secondary: "#f9BD21",
  white: "#FEFEFE",
  teal: "#1fa7aa",
  blue: "#68B8D9",
  steelBlue: "#598DC1",
  violet: "#2C6480",
  orange: "#EB604D",
  red: "#FF0000",
  black: "#4F4F4E",
  grey: "#3A3A3A",
  lightgrey: "#D9DADA",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: 150rem;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 66.5%;
  }

  body {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      <Header />
      <Nav />
      <Inner>{children}</Inner>
      <GlobalStyle />
    </StyledPage>
  </ThemeProvider>
);

export default Page;
