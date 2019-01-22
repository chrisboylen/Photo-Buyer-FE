import styled from "styled-components";

const NavStyles = styled.ul`
  background: ${props => props.theme.lightblue};
  margin: 0;
  padding: 0 0 0 7rem;
  font-size: 2rem;
  .web-nav {
    display: flex;
    @media (max-width: 760px) {
      align-items: center;
      flex-direction: column;
      font-size: 3rem;
      opacity: 0;
      position: absolute;
      top: 200%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.8s ease-in-out;
      list-style: none;
      width: 100%;
      z-index: 1500;
    }
  }
  .mobile-checkbox {
    display: none;
    &:checked ~ .mobile-bkg {
      transform: scale(100);
    }
    &:checked ~ .web-nav {
      opacity: 1;
      width: 100%;
    }
    &:checked + .mobile-btn .mobile-icon {
      background: transparent;
    }
    &:checked + .mobile-btn .mobile-icon::before {
      top: 0;
      transform: rotate(135deg);
    }
    &:checked + .mobile-btn .mobile-icon::after {
      top: 0;
      transform: rotate(-135deg);
    }
  }
  .mobile-icon {
    position: relative;
    margin-top: 3.4rem;
    &,
    &::before,
    &::after {
      width: 3.5rem;
      height: 3px;
      background: ${props => props.theme.blue};
      display: inline-block;
    }
    /* &:hover,
    &:hover::before,
    &:hover::after {
      background: yellow;
    } */
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }
    &::before {
      top: -1rem;
    }
    &::after {
      top: 1rem;
    }
  }
  .mobile-btn {
    display: none;
    background-color: #e8f4ff;
    box-shadow: 0 1rem 3rem #193e5d26;
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 3rem;
    right: 3rem;
    border-radius: 50%;
    z-index: 2000;
    text-align: center;
    cursor: pointer;
    @media (max-width: 760px) {
      display: block;
    }
    &:hover {
      background: yellow;
    }
  }
  .mobile-bkg {
    display: none;
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top: 3.5rem;
    right: 3.5rem;
    background-image: radial-gradient(
      ${props => props.theme.lightblue},
      ${props => props.theme.blue}
    );
    z-index: 1000;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    @media (max-width: 760px) {
      display: block;
    }
  }
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    color: ${props => props.theme.black};
    font-weight: 800;
    &:after {
      height: 2px;
      background: yellow;
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      color: yellow;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    width: 100%;
    font-size: 1.5rem;
  }
`;

export default NavStyles;
