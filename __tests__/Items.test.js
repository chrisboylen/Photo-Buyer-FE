import { mount } from "enzyme";
import wait from "waait";
import toJSON from "enzyme-to-json";
import { MockedProvider } from "react-apollo/test-utils";
import { fakeUser, fakeCartItems } from "../lib/testUtils";
import { CURRENT_USER_QUERY } from "../components/User";
import Items from "../components/Items";

const mocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me: {
          ...fakeUser(),
          cart: [fakeCartItems()]
        }
      }
    }
  }
];

describe("ITEMS", () => {
  it("should render and match snapshot", async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <Items />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    expect(toJSON(wrapper.find("Items"))).toMatchSnapshot();
  });
});
