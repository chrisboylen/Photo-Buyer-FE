import PleaseSignin from "../components/PleaseSignin";
import { CURRENT_USER_QUERY } from "../components/User";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import wait from "waait";
import { MockedProvider } from "react-apollo/test-utils";
import { fakeUser } from "../lib/testUtils";

const notSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: null } }
  }
];

const signedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: fakeUser() } }
  }
];

describe("PLEASESIGNIN", () => {
  it("renders the sign in dailog to logged out user", async () => {
    const wrapper = mount(
      <MockedProvider mocks={notSignedInMocks}>
        <PleaseSignin />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    expect(wrapper.text()).toContain("Please Sign in before Continuing");
    expect(wrapper.find("Signin").exists()).toBe(true);
  });

  it("renders child component when user is signed in", async () => {
    const Hey = () => <p>Hey!</p>;
    const wrapper = mount(
      <MockedProvider mocks={signedInMocks}>
        <PleaseSignin>
          <Hey />
        </PleaseSignin>
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    expect(wrapper.contains(<Hey />)).toBe(true);
  });
});
