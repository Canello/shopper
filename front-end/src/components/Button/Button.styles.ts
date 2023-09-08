import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const HEIGHT = {
    small: 32,
    medium: 36,
    large: 40,
};

interface IBaseButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    size: "small" | "medium" | "large";
}
export const BaseButton = styled.button<IBaseButton>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ size }) => HEIGHT[size]}px;
    padding: 0 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    transition: opacity 100ms linear;

    &:hover {
        opacity: 0.8;
    }
`;

export const PrimaryButton = styled(BaseButton)`
    background-color: #0095f6;
    color: #ffffff;
`;

export const SecondaryButton = styled(BaseButton)`
    border: 2px solid #0095f6;
    color: #0095f6;
`;
