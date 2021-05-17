import React from "react";
import Input from ".";

export default {
  title: "form/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Main = Template.bind({});
Main.args = {
  id: "etiquetaId",
  value: "Etiqueta",
  label: "Etiqueta",
  caption: "Aclaración",
  disabled: false,
  error: false,
};
export const Unfilled = Template.bind({});
Unfilled.args = {
  id: "unfilledId",
  value: "",
  label: "Etiqueta",
  caption: "",
  disabled: false,
  error: false,
};

export const Error = Template.bind({});
Error.args = {
  id: "errorId",
  value: "Texto",
  label: "Etiqueta",
  caption: "Aclaración",
  disabled: false,
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "disabledId",
  value: "Texto",
  label: "Etiqueta",
  caption: "Aclaración",
  disabled: true,
  error: false,
};
