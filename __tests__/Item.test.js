import ItemComponent from "../components/Item";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

const fakeItem = {
  id: "asd",
  title: "A Cool Item",
  price: 5000,
  description: "This item is really cool!",
  image: "dog.jpg",
  largeImage: "largedog.jpg"
};

describe("<Item />", () => {
  it("renders and matches snapshot", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
