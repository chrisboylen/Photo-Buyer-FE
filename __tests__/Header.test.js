import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import wait from "waait";
import { MockedProvider } from "react-apollo/test-utils";
import { CURRENT_USER_QUERY } from "../components/User";
import Header from "../components/Header";
import NProgress from "nprogress";
// import Router from "next/router";

const mocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: null } }
  }
];

describe("HEADER", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MockedProvider mocks={mocks}>
        <Header />
      </MockedProvider>
    );
  });
  it("renders and matches snapshot", () => {
    expect(toJSON(wrapper.find("header"))).toMatchSnapshot();
  });
});
