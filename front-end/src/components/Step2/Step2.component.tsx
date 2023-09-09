import React, { ChangeEventHandler, MouseEventHandler } from "react";
import { Spacer } from "../Spacer/Spacer.component";
import {
    ButtonsContainer,
    Description,
    ErrorText,
    Filename,
    Form,
    Step2Button,
    Step2FileInput,
} from "./Step2.styles";

interface Step2Props {
    clearFile: MouseEventHandler;
    onChangeFile: ChangeEventHandler;
    validate: MouseEventHandler;
    csvError: boolean;
    serverError: boolean;
    file: File;
}

export const Step2: React.FC<Step2Props> = ({
    validate,
    onChangeFile,
    clearFile,
    csvError,
    serverError,
    file,
}) => {
    return (
        <Form data-testid="Form">
            <Description>
                <Filename>{file.name}</Filename>
                <br />
                Valide o arquivo para poder atualizar os preços.
                {csvError ? (
                    <>
                        <br />
                        <ErrorText>
                            Erro com o arquivo enviado. Tente outro.
                        </ErrorText>
                    </>
                ) : null}
                {serverError ? (
                    <>
                        <br />
                        <ErrorText>Erro no servidor.</ErrorText>
                    </>
                ) : null}
            </Description>
            <Spacer y={32} />
            <ButtonsContainer>
                <Step2Button
                    variant="secondary"
                    size="medium"
                    onClick={clearFile}
                >
                    Limpar
                </Step2Button>
                <Step2FileInput variant="secondary" onChange={onChangeFile}>
                    Escolher outro
                </Step2FileInput>
                <Step2Button variant="primary" size="medium" onClick={validate}>
                    Validar
                </Step2Button>
            </ButtonsContainer>
        </Form>
    );
};
