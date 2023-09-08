import styled from "styled-components";
import { Button } from "../Button/Button.component";
import { FileInput } from "../FileInput/FileInput.component";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Description = styled.p`
    font-size: 16px;
    color: var(--neutral-color-2);
`;

export const Filename = styled.span`
    font-weight: 700;
    color: var(--neutral-color-1);
`;

export const ValidationSuccess = styled.span`
    color: var(--success-color-2);
`;

export const ValidationError = styled.span`
    color: var(--error-color-2);
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-self: flex-end;
`;

export const Step3Button = styled(Button)`
    width: 228px;
`;

export const Step3FileInput = styled(FileInput)`
    width: 228px;
`;

export const Hr = styled.hr`
    width: 100%;
    border-color: var(--secondary-color-4);
`;
