import { FC, MouseEventHandler } from "react";
import { ITheme, ThemeProps } from "../../../theme";
import styled, { css } from "styled-components";
import React from "react";

export interface IButton
  extends ThemeProps<ITheme>,
    React.HTMLProps<HTMLButtonElement> {
  /**
   * Color del branding para usar de background
   */
  color?: string;
  /**
   * El tipo de boton
   */
  type?: "button" | "outlined" | "link";
  /**
   * Forzado de tamaño del botón
   */
  buttonSize?: "small" | "medium" | "large";
  /**
   * Función a ejecutar al clickear al botón
   */
  onClick?: MouseEventHandler;
}

const buttonSizes = {
  small: css`
    ${({ theme }: IButton) => theme.textTypes.Body2w4}
    padding: 3px 14px 4px;
    line-height: 21px;
  `,
  medium: css`
    ${({ theme }: IButton) => theme.textTypes.Body2w4}
    padding: 7px 14px 8px;
    line-height: 21px;
  `,
  large: css`
    ${({ theme }: IButton) => theme.textTypes.Subtitle1w4}
    padding: 15px 14px 16px;
    line-height: 21px;
  `,
};

const getButtonColor = ({ theme, color, type }: IButton) => {
  const buttonColor = theme.colors[color];
  const background =
    type === "outlined"
      ? "white"
      : type === "link"
      ? "transparent"
      : buttonColor;
  const text = ["outlined", "link"].includes(type) ? buttonColor : "white";
  const border =
    type === "link" ? "2px solid transparent" : `2px solid ${buttonColor}`;

  const backgroundDisabled =
    type === "outlined"
      ? "white"
      : type === "link"
      ? "transparent"
      : theme.colors.gray4;
  const colorDisabled = ["outlined", "link"].includes(type)
    ? theme.colors.gray5
    : theme.colors.gray6;
  const borderDisabled =
    type === "link"
      ? "2px solid transparent"
      : `2px solid ${theme.colors.gray4}`;
  return css`
    background-color: ${background};
    color: ${text};
    border: ${border};
    :disabled {
      background-color: ${backgroundDisabled};
      color: ${colorDisabled};
      border: ${borderDisabled};
    }
  `;
};

const getButtonSize = ({ theme, buttonSize }: IButton) => {
  if (buttonSizes[buttonSize]) return buttonSizes[buttonSize];
  return css`
    ${buttonSizes.large}
    ${theme.breakpoint("md")} {
      ${buttonSizes.medium}
    }
  `;
};

const hoverStyle = () => css`
  filter: opacity(0.8);
`;

const StyledButton = styled.button<IButton>`
  border: 2px solid gray;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  width: 100%;
  ${(props) => getButtonSize(props)}
  ${(props) => getButtonColor(props)}
  &:hover {
    ${({ hover }) => hover && hoverStyle()}
  }
  &:focus {
    outline: 0;
  }
`;

export const Button: FC<IButton> = (props: IButton): JSX.Element => {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
};
