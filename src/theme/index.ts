import {
  css,
  FlattenSimpleInterpolation,
  DefaultTheme,
} from "styled-components";

export interface ThemeProps<T> {
  theme?: T;
}

export interface ITheme extends DefaultTheme {
  breakpoints: IBreakpoints;
  colors: IColors;
  fonts: IFonts;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultColors: any;
  textTypes: ITextTypes;
  breakpoint: (size: string) => string | undefined;
}

export interface IColors {
  green: string;
  blue: string;
  yellow: string;
  red: string;
  gray9: string;
  gray8: string;
  gray7: string;
  gray6: string;
  gray5: string;
  gray4: string;
  gray3: string;
  gray2: string;
  gray1: string;
}

export interface IBreakpoints {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export interface IFonts {
  main: FlattenSimpleInterpolation;
  code: FlattenSimpleInterpolation;
}

export interface ITextTypes {
  H5w4: FlattenSimpleInterpolation;
  H6w4: FlattenSimpleInterpolation;
  Titlew4: FlattenSimpleInterpolation;
  Subtitle1w5: FlattenSimpleInterpolation;
  Subtitle1w4: FlattenSimpleInterpolation;
  Body2w5: FlattenSimpleInterpolation;
  Body2w4: FlattenSimpleInterpolation;
  Captionw5: FlattenSimpleInterpolation;
  Captionw4: FlattenSimpleInterpolation;
  Overlinew5: FlattenSimpleInterpolation;
  Overlinew4: FlattenSimpleInterpolation;
}

const fonts: IFonts = {
  main: css`
    font-family: "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
  `,
  code: css`
    font-family: "source-code-pro", "Menlo", "Monaco", "Consolas", "Courier New",
      monospace;
  `,
};

const breakpoints: IBreakpoints = {
  sm: 0,
  md: 600,
  lg: 900,
  xl: 1280,
};

export const theme: ITheme = {
  breakpoints: breakpoints,
  colors: {
    green: "#43b02a",
    blue: "#0072ce",
    yellow: "#ffb800",
    red: "#e61200",
    gray9: "#16181f",
    gray8: "#444b62",
    gray7: "#838aa2",
    gray6: "#a2a7ba",
    gray5: "#caced8",
    gray4: "#e4e6eb",
    gray3: "#f5f6f7",
    gray2: "#f8f8f8",
    gray1: "#fafafa",
  },
  fonts,
  defaultColors: {},
  textTypes: {
    H5w4: css`
      ${fonts.main};
      font-size: 24px;
      font-weight: normal;
      line-height: 1.33;
    `,
    H6w4: css`
      ${fonts.main};
      font-size: 20px;
      font-weight: normal;
      line-height: 1.3;
    `,
    Titlew4: css`
      ${fonts.main};
      font-size: 18px;
      font-weight: normal;
      line-height: 1.33;
    `,
    Subtitle1w5: css`
      ${fonts.main};
      font-size: 16px;
      font-weight: 500;
      line-height: 1.31;
    `,
    Subtitle1w4: css`
      ${fonts.main};
      font-size: 16px;
      font-weight: normal;
      line-height: 1.31;
    `,
    Body2w5: css`
      ${fonts.main};
      font-size: 14px;
      font-weight: 500;
      line-height: 1.36;
    `,
    Body2w4: css`
      ${fonts.main};
      font-size: 14px;
      font-weight: normal;
      line-height: 1.36;
    `,
    Captionw5: css`
      ${fonts.main};
      font-size: 12px;
      font-weight: 500;
      line-height: 1.33;
    `,
    Captionw4: css`
      ${fonts.main};
      font-size: 12px;
      font-weight: normal;
      line-height: 1.33;
    `,
    Overlinew5: css`
      ${fonts.main};
      font-size: 10px;
      font-weight: 500;
      line-height: 1.3;
    `,
    Overlinew4: css`
      ${fonts.main};
      font-size: 10px;
      font-weight: normal;
      line-height: 1.3;
    `,
  },
  breakpoint: (size: string) => {
    switch (size) {
      case "sm":
        return `@media (max-width: ${breakpoints[size]}px )`;
      case "md":
        return `@media (min-width: calc(${breakpoints.sm}px + 1px)) and (max-width: ${breakpoints[size]}px)`;
      default:
        return `@media (min-width: calc(${breakpoints.md}px + 1px))`;
    }
  },
};

// declare module "styled-components" {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   export interface DefaultTheme extends ITheme {}
// }
