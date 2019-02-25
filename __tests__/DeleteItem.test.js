import { mount } from "enzyme";
import wait from "waait";
import toJSON from "enzyme-to-json";
import { MockedProvider } from "react-apollo/test-utils";
import { ApolloConsumer } from "react-apollo";
import { fakeUser, fakeCartItem, fakeCartItems } from "../lib/testUtils";
import { CURRENT_USER_QUERY } from "../components/User";
import DeleteItem, { DELETE_ITEM_MUTATION } from "../components/DeleteItem";

window.confirm = () => true;

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
  },
  {
    request: { query: DELETE_ITEM_MUTATION, variables: { id: "abc123" } },
    result: {
      data: {
        deleteItem: {
          ...fakeCartItem()
        }
      }
    }
  }
];

describe("DELETE ITEM", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MockedProvider mocks={mocks}>
        <DeleteItem id={"abc123"} />
      </MockedProvider>
    );
  });
  it("should render and match snapshot", async () => {
    expect(toJSON(wrapper.find("DeleteItem"))).toMatchSnapshot();
  });

  it("should delete item when clicked", async () => {});
});
