import DisplayError from "../components/ErrorMessage";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import wait from "waait";
import { MockedProvider } from "react-apollo/test-utils";

describe("ERROR MESSAGE", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MockedProvider>
        <DisplayError />
      </MockedProvider>
    );
  });

  it("renders and matches snapshot without error", async () => {
    const error = wrapper.find("DisplayError");

    expect(toJSON(error)).toMatchSnapshot();
  });
});
