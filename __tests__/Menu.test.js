import { mount } from "enzyme";
import wait from "waait";
import toJSON from "enzyme-to-json";
import { MockedProvider } from "react-apollo/test-utils";
import { ApolloConsumer } from "react-apollo";
import { CURRENT_USER_QUERY } from "../components/User";
import { fakeUser } from "../lib/testUtils";
import Menu from "../components/Menu";
import { MobileStyles } from "../components/styles/NavStyles";

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

describe("Menu", () => {
  let wrapper;
  let toggleMenuMock;

  beforeEach(() => {
    wrapper = mount(
      <MockedProvider mocks={signedInMocks}>
        <Menu toggleMenu={toggleMenuMock} />
      </MockedProvider>
    );
    toggleMenuMock = jest.fn();
  });

  it("renders and matches snapshot when signed in", async () => {
    await wait();
    wrapper.update();

    expect(toJSON(wrapper.find('ul[data-test="mobile"]'))).toMatchSnapshot();
    expect(wrapper.find('ul[data-test="mobile"]').children().length).toBe(5);
    expect(wrapper.find('ul[data-test="mobile"]').text()).toContain("Signout");
  });

  it("renders and matches snapshot when not signed in", async () => {
    wrapper = mount(
      <MockedProvider mocks={notSignedInMocks}>
        <Menu toggleMenu={toggleMenuMock} />
      </MockedProvider>
    );
    await wait();
    wrapper.update();

    expect(toJSON(wrapper.find('ul[data-test="mobile"]'))).toMatchSnapshot();
  });
});
