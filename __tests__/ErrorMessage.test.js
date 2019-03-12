import DisplayError from "../components/ErrorMessage";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import wait from "waait";
import { MockedProvider } from "react-apollo/test-utils";
import { CURRENT_USER_QUERY } from "../components/User";
import { fakeUser, fakeCartItems } from "../lib/testUtils";

const mocks1 = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me: {
          ...fakeUser(),
          cart: [fakeCartItems()]
        }
      }
    },
    error: new Error("Broken!")
  }
];

describe("ERROR MESSAGE", () => {
  it("renders and matches snapshot without error", async () => {
    let wrapper = mount(
      <MockedProvider>
        <DisplayError />
      </MockedProvider>
    );
    const error = wrapper.find("DisplayError");
    await wait();
    wrapper.update();

    expect(toJSON(error)).toMatchSnapshot();
  });

  it("renders and matches snapshot with error", async () => {
    let wrapper = mount(
      <MockedProvider mocks={mocks1}>
        <DisplayError />
      </MockedProvider>
    );
    const error = wrapper.find("DisplayError");
    await wait();
    wrapper.update();

    expect(toJSON(error)).toMatchSnapshot();
  });
});
