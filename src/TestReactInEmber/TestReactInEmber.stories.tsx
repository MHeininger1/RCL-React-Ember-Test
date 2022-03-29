// Generated with util/create-component.js
import React from "react";
import TestReactInEmber from "./TestReactInEmber";

export default {
    title: "TestReactInEmber"
};

export const WithoutFunctionPassedIn = () => <TestReactInEmber />;

export const WithFunctionPassedIn = () => <TestReactInEmber passedIn={() => alert('Hello Ember')}/>;
