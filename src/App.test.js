import React from "react";
import 'whatwg-fetch';
import App from "./App.js";
import { render, cleanup } from "@testing-library/react";


describe("Take a snaphot", () => {
    afterEach(cleanup);

    it('should take snapshot', () => {
        const { asFragment} = render(<App />);

        // expect(asFragment(<App />)).toMatchSnapshot();
        // expect(asFragment(<App />)).toMatchSnapshot();
        // expect(asFragment(<App />)).toMatchSnapshot();
        // expect(asFragment(<App />)).toMatchSnapshot();
        // expect(asFragment(<App />)).toMatchSnapshot();
        // expect(asFragment(<App />)).toMatchSnapshot();
    });
})