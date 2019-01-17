import styled from "styled-components";

const PaginationStyles = styled.div`
  background: #9ed2ff4d;
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 2px solid ${props => props.theme.blue};
  border-radius: 10px;
  min-width: 40rem;
  @media (max-width: 760px) {
    margin: 0;
  }
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid ${props => props.theme.lightgrey};
    &:last-child {
      border-right: 0;
    }
    @media (max-width: 760px) {
      padding: 5px 15px;
    }
  }
  a[aria-disabled="true"] {
    color: grey;
    pointer-events: none;
  }
`;

export default PaginationStyles;
