import React, { MouseEventHandler } from "react";
import { PrimaryButton, SecondaryButton } from "./Button.styles";

interface IButtonProps {
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler;
}

const buttons = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
};

export const Button: React.FC<React.PropsWithChildren<IButtonProps>> = ({
    variant = "primary",
    size = "medium",
    children,
    ...otherProps
}) => {
    const ButtonComponent = buttons[variant];
    return (
        <ButtonComponent size={size} {...otherProps}>
            {children}
        </ButtonComponent>
    );
};
