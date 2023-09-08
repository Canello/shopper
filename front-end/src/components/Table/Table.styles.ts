import styled from "styled-components";

interface ITrProps {
    $isSuccess: boolean;
}
export const Tr = styled.tr<ITrProps>`
    background-color: ${({ $isSuccess }) =>
        $isSuccess ? "none" : "var(--error-color-1)"};
    color: ${({ $isSuccess }) =>
        $isSuccess ? "var(--neutral-color-2)" : "var(--error-color-2)"};
`;

export const Th = styled.th`
    padding: var(--s);
    border: 1px solid var(--secondary-color-4);
    font-size: 16px;
    font-weight: 700;
    color: var(--neutral-color-2);
    text-align: center;
`;

export const Td = styled.td`
    padding: var(--s);
    border: 1px solid var(--secondary-color-4);
    font-size: 16px;
`;

export const TdCentered = styled(Td)`
    text-align: center;
`;
