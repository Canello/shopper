import styled from "styled-components";

export const ProgressTrackerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    width: 100px;
    border-radius: 8px;
    border: 1px solid var(--secondary-color-4);
    background-color: var(--secondary-color-2);
`;

interface IProgressDotProps {
    $isActive: boolean;
}
export const ProgressDot = styled.div<IProgressDotProps>`
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: ${({ $isActive }) =>
        $isActive ? "var(--primary-color-1)" : "var(--secondary-color-5)"};
`;
