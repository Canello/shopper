import React, { ChangeEventHandler, MouseEventHandler } from "react";
import { Spacer } from "../Spacer/Spacer.component";
import { Table } from "../Table/Table.component";
import {
    ButtonsContainer,
    Description,
    Filename,
    Form,
    Hr,
    Step3Button,
    Step3FileInput,
    ValidationError,
    ValidationSuccess,
} from "./Step3.styles";

interface IStep3Props {
    update: MouseEventHandler;
    onChangeFile: ChangeEventHandler;
    clearFile: MouseEventHandler;
    validationInfo: ValidationInfo;
    file: File;
}

export const Step3: React.FC<IStep3Props> = ({
    update,
    onChangeFile,
    clearFile,
    validationInfo,
    file,
}) => {
    return (
        <Form>
            <Description>
                <Filename>{file.name}</Filename>
                <br />
                {validationInfo.is_valid ? (
                    <ValidationSuccess>
                        Validação bem sucedida! Preços prontos para serem
                        atualizados.
                    </ValidationSuccess>
                ) : (
                    <ValidationError>
                        Validação mal sucedida. Escolha um arquivo válido.
                    </ValidationError>
                )}
            </Description>
            <Spacer y={32} />
            <ButtonsContainer>
                <Step3Button
                    variant="secondary"
                    size="medium"
                    onClick={clearFile}
                >
                    Limpar
                </Step3Button>
                <Spacer x={24} />
                <Step3FileInput variant={"secondary"} onChange={onChangeFile}>
                    Escolher outro
                </Step3FileInput>
                <Spacer x={24} />
                <Step3Button
                    variant="primary"
                    size="medium"
                    onClick={update}
                    disabled={!validationInfo.is_valid}
                >
                    Atualizar
                </Step3Button>
            </ButtonsContainer>
            <Spacer y={24} />
            <Hr />
            <Spacer y={32} />
            <Table productInfos={validationInfo.product_infos} />
        </Form>
    );
};
