import styled, { keyframes } from "styled-components";

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid ${props => props.theme.lightgrey};
`;

const DropDownItem = styled.div`
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  background: ${props => (props.highlighted ? "#f7f7f7" : "white")};
  padding: 1rem;
  transition: all 0.2s;
  ${props => (props.highlighted ? "padding-left: 2rem;" : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${props => (props.highlighted ? props.theme.lightgrey : "white")};
  img {
    margin-right: 10px;
  }
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }

  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

const SearchStyles = styled.div`
  position: relative;
  input {
    background: transparent;
    color: #e8f4ff;
    width: 100%;
    padding: 10px;
    border: 0;
    font-size: 2rem;
    padding: 1rem 0 1rem 10rem;
    width: 100%;
    @media (max-width: 760px) {
      margin: 1rem 0 0 0;
      padding: 1rem 0 1rem 3rem;
    }
    &::placeholder {
      color: #e8f4ff;
    }
    @media (max-width: 1300px) {
      width: 100%;
      font-size: 1.5rem;
    }
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };
