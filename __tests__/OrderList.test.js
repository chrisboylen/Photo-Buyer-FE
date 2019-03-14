import { mount } from "enzyme";
import wait from "waait";
import toJSON from "enzyme-to-json";
import { MockedProvider } from "react-apollo/test-utils";
import OrderList, { USER_ORDERS_QUERY } from "../components/OrderList";
import { fakeOrder, fakeOrders } from "../lib/testUtils";

const mocks = [
  {
    request: {
      query: USER_ORDERS_QUERY
    },
    result: {
      data: {
        orders: fakeOrders()
      }
    }
  }
];

describe("ORDER LIST", () => {
  it("renders and matches snapshot", async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <OrderList />
      </MockedProvider>
    );
    await wait();
    wrapper.update();

    expect(toJSON(wrapper.find("OrderUl"))).toMatchSnapshot();
  });
});
