import CartCount from "../components/CartCount";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";

describe("CARTCOUNT", () => {
  it("renders", () => {
    shallow(<CartCount count={10} />);
  });

  it("matches snapshot", () => {
    const wrapper = shallow(<CartCount count={10} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("updates props", () => {
    const wrapper = shallow(<CartCount count={50} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.setProps({ count: 10 });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
