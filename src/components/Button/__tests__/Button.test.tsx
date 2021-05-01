import React from "react";
import renderer from "react-test-renderer";

import { Button } from "../src/index";

import { shallow, mount, render } from 'enzyme';

import Foo from '../Foo';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
  });

  it('should be selectable by class "foo"', function() {
    expect(shallow(<Foo />).is('.foo')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Foo />).find('.foo').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<Foo />).text()).toEqual('Bar');
  });
});


describe("Button", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Button>{"Test"}</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
