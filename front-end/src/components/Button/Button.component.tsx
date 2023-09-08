import React, { MouseEventHandler } from "react";
import { PrimaryButton, SecondaryButton } from "./Button.styles";

interface IButtonProps {
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    onClick?: MouseEventHandler;
}

const buttons = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
};

export const Button: React.FC<React.PropsWithChildren<IButtonProps>> = ({
    variant = "primary",
    size = "medium",
    disabled = false,
    onClick,
    children,
    ...otherProps
}) => {
    const ButtonComponent = buttons[variant];
    const onClickFunc = disabled ? () => {} : onClick;
    return (
        <ButtonComponent
            size={size}
            disabled={disabled}
            onClick={onClickFunc}
            {...otherProps}
        >
            {children}
        </ButtonComponent>
    );
};
