import ResetRequest, {
  REQUEST_RESET_MUTATION
} from "../components/ResetRequest";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import wait from "waait";
import { MockedProvider } from "react-apollo/test-utils";
import Router from "next/router";

const mocks = [
  {
    request: {
      query: REQUEST_RESET_MUTATION,
      variables: { email: "billy@gmail.com" }
    },
    result: {
      data: { resetRequest: { message: "success", __typename: "Message" } }
    }
  }
];

describe("REQUEST RESET", () => {
  it("renders and matches snapshot ", async () => {
    const wrapper = mount(
      <MockedProvider>
        <ResetRequest />
      </MockedProvider>
    );
    const form = wrapper.find('form[data-test="form"]');
    expect(toJSON(form)).toMatchSnapshot();
  });

  it("calls the mutation", async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <ResetRequest />
      </MockedProvider>
    );
    wrapper.find("input").simulate("change", {
      target: { name: "email", value: "billy@gmail.com" }
    });
    wrapper.find("form").simulate("submit");
    await wait();
    wrapper.update();

    expect(wrapper.find("p").text()).toContain("i");
  });
});
