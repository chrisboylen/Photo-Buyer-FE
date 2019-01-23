import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import wait from "waait";
import { MockedProvider } from "react-apollo/test-utils";
import { fakeUser, fakeCartItem } from "../lib/testUtils";
import { CURRENT_USER_QUERY } from "../components/User";
import CartItem from "../components/CartItem";
import RemoveFromCart from "../components/RemoveFromCart";

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
  }
];
const cartItem = {
  id: "5",
  item: {
    id: 1,
    title: "landscape"
  }
};

describe("CART ITEM", () => {
  it("renders and matches snapshot with cart item", async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <CartItem cartItem={cartItem} />
        <RemoveFromCart id={cartItem.id} />
      </MockedProvider>
    );

    await wait();
    wrapper.update();
    expect(toJSON(wrapper.find("CartItem"))).toMatchSnapshot();
  });

  it("renders and matches snapshot without cart item", async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <CartItem cartItem={{}} />
        <RemoveFromCart id={cartItem.id} />
      </MockedProvider>
    );

    await wait();
    wrapper.update();
    expect(toJSON(wrapper.find("CartItem"))).toMatchSnapshot();
  });
});
