import TestRenderer from "react-test-renderer";
import { Back } from "../components/Back/Back";
describe("back component", () => {
  it("render", () => {
    const tree = TestRenderer.create(<Back />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
