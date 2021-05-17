import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import theme from "../src/theme";

const themes = [theme];
addDecorator(withThemesProvider(themes), ThemeProvider);
