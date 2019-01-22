import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { MockedProvider } from "react-apollo/test-utils";
import { CURRENT_USER_QUERY } from "../components/User";
import Header from "../components/Header";

const mocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: null } }
  }
];

describe("HEADER", () => {
  it("renders and matches snapshot", () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <Header />
      </MockedProvider>
    );

    expect(toJSON(wrapper.find("header"))).toMatchSnapshot();
  });
});
