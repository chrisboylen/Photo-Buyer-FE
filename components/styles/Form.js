import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
  box-shadow: 0 0 15px 6px rgba(25, 62, 93, 0.37);
  background: #9ed2ff4d;
  border-radius: 5px;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    border-radius: 3px;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.blue};
    }
  }
  button,
  input[type="submit"] {
    width: auto;
    background: #4dadfe;
    color: white;
    border: 0;
    border-radius: 5px;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  button {
    background: #ffe504;
    color: #193e5d;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: "";
      display: block;
      background-image: linear-gradient(to right, #4dadfe 0%, #193e5d 100%);
      border-radius: 100px;
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
