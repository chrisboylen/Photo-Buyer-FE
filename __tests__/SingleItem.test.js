import SingleItem, { SINGLE_ITEM_QUERY } from "../components/SingleItem";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import wait from "waait";
import { MockedProvider } from "react-apollo/test-utils";
import { fakeItem } from "../lib/testUtils";

describe("SINGLEITEM", () => {
  it("renders with proper data", async () => {
    const mocks = [
      {
        //when someone makes a req with this query and var combo
        request: { query: SINGLE_ITEM_QUERY, variables: { id: "123" } }
        //return this fake data (mocked data)
      }
    ];
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <SingleItem id="123" />
      </MockedProvider>
    );

    expect(wrapper.text()).toContain("Loading...");
    wrapper.update();
    await wait();
    expect(toJSON(wrapper.find("h2"))).toMatchSnapshot();
  });

  it("errors with a not found item", async () => {
    const mocks = [
      {
        request: { query: SINGLE_ITEM_QUERY, variables: { id: "123" } },
        result: { errors: [{ message: "Items Not Found!" }] }
      }
    ];
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <SingleItem id="123" />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    const item = wrapper.find('[data-test="graphql-error"]');
    expect(item.text()).toContain("Items Not Found!");
    expect(toJSON(item)).toMatchSnapshot();
  });
});
