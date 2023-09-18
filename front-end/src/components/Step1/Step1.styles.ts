import styled from "styled-components";
import { FileInput } from "../FileInput/FileInput.component";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Description = styled.p`
    font-size: 16px;
    color: var(--neutral-color-2);
`;

export const Example = styled.div`
    padding: var(--l);
    border-radius: 8px;
    border: 1px solid var(--secondary-color-4);
    background-color: var(--secondary-color-3);
`;

export const ExampleText = styled.p`
    font-size: 16px;
    color: var(--secondary-color-6);
`;

export const Step1FileInput = styled(FileInput)`
    align-self: flex-end;
    max-width: 180px;
    width: 100%;
`;
