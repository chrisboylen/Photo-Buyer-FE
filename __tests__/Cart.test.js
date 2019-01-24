import Cart, { LOCAL_STATE_QUERY } from "../components/Cart";
import { CURRENT_USER_QUERY } from "../components/User";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import wait from "waait";
import { MockedProvider } from "react-apollo/test-utils";
import { fakeUser, fakeCartItem, fakeCartItems } from "../lib/testUtils";

const mocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me: {
          ...fakeUser(),
          cart: [fakeCartItem()]
        }
      }
    }
  },
  {
    request: { query: LOCAL_STATE_QUERY },
    result: { data: { cartOpen: true } }
  }
];
const mocks2 = [
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
  },
  {
    request: { query: LOCAL_STATE_QUERY },
    result: { data: { cartOpen: true } }
  }
];

describe("CART", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MockedProvider mocks={mocks}>
        <Cart />
      </MockedProvider>
    );
  });

  it("renders and matches snapshot with cart item", async () => {
    await wait();
    wrapper.update();
    expect(toJSON(wrapper.find("header"))).toMatchSnapshot();
    expect(wrapper.find("CartItem")).toHaveLength(1);
  });

  it("renders and matches snapshot with cart items", async () => {
    await wait();
    wrapper.update();
    expect(toJSON(wrapper.find("header"))).toMatchSnapshot();
  });
});
