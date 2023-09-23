import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "../scss/styles.scss";
import Footer from "./footer";
import Container from "react-bootstrap/Container";
import Navigation from "./navigation";
import Grit from "../images/space-grunge.jpg";

const theme = {
  colors: {
    bronze: "#9B794E",
    iron: "#000",
    smoke: "#fff",
    // Dark Gray
    stormGray: "#5F5F5F",
    // Lighter Gray
    fogGray: "#B7B7B7",
  },
  fontFamily: {
    gotham: `"Gotham", sans-serif`,
    gothamCondensedLight: `"GothamCondensed",sans-serif`,
    gothamCondensedBook: `"GothamCondensed-Book",sans-serif`,
    harbour: `"Harbour", serif`,
  },
  breakpoints: {
    // Extra small screen / phone
    xs: "0",
    // Small screen / phone
    sm: "576px",
    // Medium screen / tablet
    md: "768px",
    // Large screen / desktop
    lg: "992px",
    // Extra large screen / wide desktop
    xl: "1200px",
    xxl: "1500px",
    xxxl: "1704px",
  },
};

const Wrapper = styled(Container)`
  font-family: ${theme.fontFamily.gotham};
  background: ${theme.colors.iron};
  background: url(${Grit});
  background-size: cover;
  font-weight: 300;
  .old-english {
    font-family: ${theme.fontFamily.harbour};
    line-height: 1;
    font-size: 3rem;
  }
  p {
    color: ${theme.colors.smoke};
    line-height: 1.75;
    margin: 0;
    padding: 0;
  }
  a {
    color: ${theme.colors.smoke};
    text-decoration: none;
    transition: 500ms;
  }
  a:hover {
    color: ${theme.colors.bronze};
  }
  ul {
    list-style: none;
    counter-reset: li;
    color: ${theme.colors.smoke};
    padding: 0;
  }
  li.coin-bullets {
    position: relative;
    padding: 10px 0 10px 45px;
    font-weight: 200;
    &:before {
      content: counter(li);
      counter-increment: li;
      height: 25px;
      width: 25px;
      border-radius: 50%;
      color: ${theme.colors.smoke};
      text-align: center;
      position: absolute;
      left: 0;
      background: ${theme.colors.bronze};
    }
    transition: all 250ms;
    &:hover {
      transform: scale(1.05);
    }
  }
  h1 {
    color: ${theme.colors.smoke};
    font-size: 3.5rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    line-height: 1;
  }
  h2 {
    font-size: 3rem;
    line-height: 1;
  }
  h5 {
    font-size: 2rem;
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .bronze {
    color: #9b794e;
  }
  .smoke {
    color: #fff;
  }
  .iron {
    color: #000;
  }
  .harbour {
    font-family: ${theme.fontFamily.harbour};
  }
  .uppercut {
    text-transform: uppercase;
  }
  .fatty {
    font-weight: 900;
  }
  .thick {
    font-weight: 600;
  }
  .number {
    font-family: ${theme.fontFamily.gothamCondensedLight};
    border-bottom: 1px solid ${theme.colors.smoke};
    text-transform: uppercase;
    width: 1.5rem;
  }
  .crew-name {
    padding: 1rem 0 0 0;
    line-height: 1;
  }
  .crew-title {
    line-height: 1.4;
    padding: 5px 0 0 0;
  }
  .arrow {
    border: none;
    background: none;
    margin: 20px 4px;
    transition: all 250ms ease;
  }
  .easter-egg {
    border: none;
    background: transparent;
  }
  .next {
    &:hover {
      transform: translate(5px, 0);
    }
  }
  .previous {
    &:hover {
      transform: translate(-5px, 0);
    }
  }
  .img-faded {
    filter: blur(5px);
  }
  .modal-opener {
    cursor: pointer;
    transition: all 500ms;
    &:hover {
      filter: saturate(0);
    }
  }
  .indent {
    display: flex;
    padding: 1rem 0 0 0;
    p {
      padding: 0 0 1rem 0;
    }
    &:before {
      content: "";
      background: ${theme.colors.smoke};
      height: 1px;
      width: 200px;
      margin: 0.75rem 0.5rem 0 0;
    }
    a {
      background: ${theme.colors.bronze};
      padding: 1.25rem;
      text-align: center;
      width: 40%;
      transition: all 500ms;
      text-transform: uppercase;
      font-size: 1.25rem;
      letter-spacing: 1px;
      font-family: ${theme.fontFamily.gothamCondensedBook};
      &:hover {
        color: ${theme.colors.smoke};
        transform: rotate(15deg);
        background: ${theme.colors.stormGray};
      }
    }
  }
  @media (max-width: ${theme.breakpoints.sm}) {
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Wrapper fluid className="p-0">
        {children}
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};
export default Layout;
