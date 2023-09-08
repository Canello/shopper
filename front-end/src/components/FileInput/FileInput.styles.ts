import styled from "styled-components";

const HEIGHT = {
    small: 32,
    medium: 36,
    large: 40,
};

interface ILabelProps {
    size: "small" | "medium" | "large";
}
export const Label = styled.label<ILabelProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ size }) => HEIGHT[size]}px;
    padding: 0 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    transition: opacity 100ms linear;

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;

export const PrimaryLabel = styled(Label)`
    background-color: var(--primary-color-1);
    color: #ffffff;
`;

export const SecondaryLabel = styled(Label)`
    border: 1px solid var(--secondary-color-5);
    color: var(--neutral-color-1);
`;

export const Input = styled.input`
    display: none;
`;
