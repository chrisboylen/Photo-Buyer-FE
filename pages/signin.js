import Signin from "../components/Signin";
import styled from "styled-components";
import ResetRequest from "../components/ResetRequest";

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat() (auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const SignupPage = props => (
  <Columns>
    <Signin />
    <ResetRequest />
  </Columns>
);

export default SignupPage;
