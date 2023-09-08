import styled from "styled-components";

interface ISuccessTipStyledProps {
    $isShowing: boolean;
}
export const SuccessTipStyled = styled.div<ISuccessTipStyledProps>`
    position: absolute;
    top: 80px;
    left: 80px;

    padding: var(--m);
    border-radius: 8px;
    border: 1px solid var(--success-color-2);
    background-color: var(--success-color-1);
    opacity: ${({ $isShowing }) => ($isShowing ? "1" : "0")};
    pointer-events: none;

    transition: all linear 200ms;
`;

export const Text = styled.p`
    color: var(--success-color-2);
`;
