import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const HEIGHT = {
    small: 32,
    medium: 36,
    large: 40,
};

interface IBaseButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    size: "small" | "medium" | "large";
    disabled: boolean;
}
export const BaseButton = styled.button<IBaseButton>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ size }) => HEIGHT[size]}px;
    padding: 0 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    transition: opacity 100ms linear;
    pointer-events: ${({ disabled }) => (disabled ? "none" : "all")};

    &:hover {
        opacity: 0.8;
    }
`;

export const PrimaryButton = styled(BaseButton)`
    background-color: ${({ disabled }) =>
        disabled ? "var(--secondary-color-4)" : "var(--primary-color-1)"};
    color: ${({ disabled }) =>
        disabled ? "var(--secondary-color-5)" : "var(--neutral-color-1)"};
`;

export const SecondaryButton = styled(BaseButton)`
    border: ${({ disabled }) =>
        disabled
            ? "1px solid var(--secondary-color-3)"
            : "1px solid var(--secondary-color-5)"};
    color: ${({ disabled }) =>
        disabled ? "var(--secondary-color-4)" : "var(--neutral-color-1)"};
`;
