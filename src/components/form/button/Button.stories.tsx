import React from "react";

import Button from ".";

export default {
  title: "form/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: "Main Button",
  type: "button",
  color: "green",
  disabled: false,
  buttonSize: undefined,
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: "Outlined Button",
  type: "outlined",
  color: "green",
  disabled: false,
  buttonSize: undefined,
};

export const Link = Template.bind({});
Link.args = {
  children: "Link Button",
  type: "link",
  color: "green",
  disabled: false,
  buttonSize: undefined,
};

export const Small = Template.bind({});
Small.args = {
  children: "Small Button",
  type: "button",
  color: "green",
  disabled: false,
  buttonSize: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Medium Button",
  type: "button",
  color: "green",
  disabled: false,
  buttonSize: "medium",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large Button",
  type: "button",
  color: "green",
  disabled: false,
  buttonSize: "large",
};
