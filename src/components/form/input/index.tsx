import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import styled, { css } from "styled-components";
import { ITheme, ThemeProps } from "../../../theme";

const InputContainer = styled.div`
  color: ${({ theme }: { theme: ITheme }) => theme.textTypes.Body2w4}
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const thick_input = () => css`
  padding: 16px 13px;
  border: solid 2px;
  ${({ theme }: { theme: ITheme }) => theme.breakpoint("md")} {
    padding: 12px 14px;
  }
`;

const error_input = () =>
  css`
    ${thick_input}
    border-color: ${({ theme }: { theme: ITheme }) => theme.colors.red};
    :focus,
    :hover:not(:focus):not(:disabled) {
      border-color: ${({ theme }: { theme: ITheme }) => theme.colors.red};
    }
  `;

const StyledInput = styled.input(
  ({ error }: { error: boolean }) => css`
    padding: 17px 14px;
    border: solid 1px ${({ theme }: { theme: ITheme }) => theme.colors.gray5};
    border-radius: 4px;
    ${({ theme }: { theme: ITheme }) => theme.textTypes.Body2w4}
    :hover:not(:focus):not(:disabled) {
      border-color: ${({ theme }: { theme: ITheme }) => theme.colors.gray6};
    }
    :focus {
      outline-width: 0;
      outline: none;
      ${thick_input}
      border-color: ${({ theme }: { theme: ITheme }) => theme.colors.green};
    }
    :disabled {
      color: ${({ theme }: { theme: ITheme }) => theme.colors.gray5};
      background-color: inherit;
    }
    ${({ theme }: { theme: ITheme }) => theme.breakpoint("md")} {
      padding: 13px 15px;
    }
    ${error && error_input()}
  `,
);

const label_shrink = ({ shrink }: { shrink: boolean }) =>
  css`
    ${!shrink
      ? css`
          transform: translate(11px, 18px) scale(1);
          ${({ theme }: { theme: ITheme }) => theme.breakpoint("md")} {
            transform: translate(12px, 14px) scale(1);
          }
        `
      : css`
          transform: translate(9px, -12px) scale(0.9);
          background-color: white;
          ${({ theme }: { theme: ITheme }) => theme.breakpoint("md")} {
            transform: translate(10px, -12px) scale(0.9);
          }
        `}
    padding: 0 4px;
    transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  `;

const label_focused = ({ focused }: { focused: boolean }) =>
  focused &&
  css`
    color: ${({ theme }: { theme: ITheme }) => theme.colors.green};
  `;

const label_disabled = ({ disabled }: { disabled: boolean }) =>
  disabled &&
  css`
    color: ${({ theme }: { theme: ITheme }) => theme.colors.gray5};
  `;

const label_error = () =>
  css`
    color: ${({ theme }: { theme: ITheme }) => theme.colors.red};
  `;

interface ILabel extends React.HTMLProps<HTMLLabelElement> {
  error: boolean;
  focused: boolean;
  shrink: boolean;
}

const Label = styled.label(
  ({ shrink, disabled, focused, error }: ILabel) => css`
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    ${({ theme }: { theme: ITheme }) => theme.textTypes.Body2w4};
    color: ${({ theme }: { theme: ITheme }) => theme.colors.gray7};
    ${() => label_shrink({ shrink })}
    ${() => label_disabled({ disabled: !!disabled })}
    ${() => label_focused({ focused })}
    ${error && label_error()}
  `,
);

const caption_error = () =>
  css`
    color: ${({ theme }: { theme: ITheme }) => theme.colors.red};
  `;

const Caption = styled.span(
  ({ error }: { error: boolean }) => css`
    margin-top: 10px;
    ${({ theme }: { theme: ITheme }) => theme.textTypes.Captionw4}
    color: ${({ theme }: { theme: ITheme }) => theme.colors.gray6};
    ${error && caption_error()}
  `,
);

export interface IInput extends ThemeProps<ITheme> {
  /**
   * id del input
   */
  id: string;
  /**
   * className del container del input
   */
  className?: string;
  /**
   * onChange del input
   */
  onChange?: ChangeEventHandler;
  /**
   * Valor del input
   */
  value?: string;
  /**
   * Etiqueta del input
   */
  label?: string;
  /**
   * Si el input está deshabilitado
   */
  disabled?: boolean;
  /**
   * Si se muestra el input con error
   */
  error?: boolean;
  /**
   * Subtexto del input
   */
  caption?: string;
  /**
   * Type del input
   */
  type?: string;
}

export const Input = (props: IInput): JSX.Element => {
  const {
    id,
    className,
    onChange,
    value = "",
    label = "",
    disabled = false,
    error = false,
    caption = "",
    type = "",
  } = props;
  const [focus, setFocus] = useState<boolean>(false);
  const [shrink, setShrink] = useState<boolean>(false);

  useEffect(() => {
    if (focus || value?.length > 0) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  }, [value, focus]);

  const _onFocus = () => {
    setFocus(true);
  };
  const _onBlur = () => {
    setFocus(false);
  };

  const _handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    onChange?.(e);
  };

  return (
    <InputContainer className={className}>
      <Label focused={focus} shrink={shrink} disabled={disabled} error={error}>
        {label}
      </Label>
      <StyledInput
        id={id}
        onFocus={_onFocus}
        onBlur={_onBlur}
        value={value}
        onChange={_handleChange}
        disabled={disabled}
        error={error}
        type={type}
      />
      <Caption error={error}>{caption}</Caption>
    </InputContainer>
  );
};
