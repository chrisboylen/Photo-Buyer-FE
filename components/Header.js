import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";
import Router from "next/router";
import NProgress from "nprogress";
import Cart from "./Cart";
import Search from "./Search";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  background: ${props => props.theme.lightblue};
  font-size: 8rem;
  margin: 0;
  min-height: 12rem;
  position: relative;
  z-index: 1500;
  a {
    margin: 0 0 0 10rem;
    padding: 1rem 2rem 0.6rem 2rem;
    border-radius: 8px;
    background: #e8f4ff;
    color: #4dadfe;
    text-transform: uppercase;
    text-decoration: none;
  }
  span {
    background: linear-gradient(to right, #00f1fe 0%, #4dadfe 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  img {
    width: 6rem;
    margin: 0 2rem 0 0;
  }
  @media (max-width: 1300px) {
    font-size: 6rem;
    img {
      width: 4.5rem;
    }
    @media (max-width: 760px) {
      line-height: 1.5;
      a {
        top: 2rem;
        left: 3rem;
        margin: 0;
        padding: 0.3rem 1.1rem 0 1.1rem;
        position: relative;
      }
      img {
        margin: 0;
        width: 4rem;
      }
      span {
        display: none;
      }
    }
  }
`;

const StyledHeader = styled.header`
  left: 0;
  top: 0;
  position: sticky;
  z-index: 500;
  .bar {
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    background: linear-gradient(
      to bottom,
      #8cbce2 0%,
      #8cbce2 70%,
      #193e5d 100%
    );
    display: grid;
    grid-template-columns: 1fr;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>
            <img src="../static/camera.png" alt="Camera Icon" />
            <span className="text">Photo Buyer</span>
          </a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <Search />
    </div>
    <Cart />
  </StyledHeader>
);

export default Header;
