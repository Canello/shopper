import React, { ChangeEventHandler, MouseEventHandler } from "react";
import { Spacer } from "../Spacer/Spacer.component";
import {
    ButtonsContainer,
    CsvErrorText,
    Description,
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
    file: File;
}

export const Step2: React.FC<Step2Props> = ({
    validate,
    onChangeFile,
    clearFile,
    csvError,
    file,
}) => {
    return (
        <Form>
            <Description>
                <Filename>{file.name}</Filename>
                <br />
                Valide o arquivo para poder atualizar os preços.
                {csvError ? (
                    <>
                        <br />
                        <CsvErrorText>
                            Erro com o arquivo enviado. Tente outro.
                        </CsvErrorText>
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
