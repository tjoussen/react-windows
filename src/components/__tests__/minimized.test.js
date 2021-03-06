import React from 'react';
import ReactDOM from 'react-dom';
import renderer from "react-test-renderer";
import Minimized from "../minimized";

describe('Minimized', () => {
    beforeAll(() => {
        ReactDOM.createPortal = jest.fn((element, node) => {
            return element;
        })
    });

    afterEach(() => {
        ReactDOM.createPortal.mockClear();
    });

    it('should render', () => {
        const tree = renderer.create(<Minimized />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});