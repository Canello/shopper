import styled from "styled-components";

interface ISuccessTipStyledProps {
    $isShowing: boolean;
}
export const SuccessTipStyled = styled.div<ISuccessTipStyledProps>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 64px;
    top: calc(50% - 32px);
    left: calc(50% - 160px);
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
