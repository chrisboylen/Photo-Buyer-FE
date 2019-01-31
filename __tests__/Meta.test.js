import { mount } from "enzyme";
import wait from "waait";
import toJSON from "enzyme-to-json";
import { MockedProvider } from "react-apollo/test-utils";
import Meta from "../components/Meta";

describe("META", () => {
  it("renders and matches snapshot", async () => {
    const wrapper = mount(
      <MockedProvider>
        <Meta />
      </MockedProvider>
    );
    await wait();
    wrapper.update();

    expect(toJSON(wrapper.find("Meta"))).toMatchSnapshot();
  });
});
