import React from "react";
import Box from ".";

export default {
  title: "Box",
  component: Box,
};

const Template = (args) => {
  return (
    <Box {...args}>
      <div>
        <h1> Title of the box </h1>
        <span>Test of the box</span>
        <p>Content of the box</p>
      </div>
    </Box>
  );
};

export const Main = Template.bind({});
Main.args = {
  children: "<div>Test</div>",
  defaultBoxShadow: false,
};
