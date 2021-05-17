import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { ITheme, ThemeProps } from "../../../theme";

const BoxContainer = styled.div<IBox>`
  background-color: #fefefe;
  padding: 15px;
  width: auto;
  display: inline-block;
  border-radius: 10px;
  border: 1px solid #fefefe;
  ${({ defaultBoxShadow }: IBox) =>
    defaultBoxShadow &&
    `box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);`}
  color: ${({ theme }: IBox) => theme.colors.gray6}
`;

export interface IBox
  extends ThemeProps<ITheme>,
    React.HTMLProps<HTMLDivElement> {
  defaultBoxShadow?: boolean;
  children?: ReactNode | JSX.Element | JSX.Element[];
}

export const Box: FC<IBox> = (props: IBox): JSX.Element => {
  const { children, defaultBoxShadow, className } = props;
  return (
    <BoxContainer defaultBoxShadow={defaultBoxShadow} className={className}>
      {children}
    </BoxContainer>
  );
};
