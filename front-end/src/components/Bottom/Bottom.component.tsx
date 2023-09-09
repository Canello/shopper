import React, { useState } from "react";
import { BottomStyled } from "./Bottom.styles";
import { Step1 } from "../Step1/Step1.component";
import { Step2 } from "../Step2/Step2.component";
import { Step3 } from "../Step3/Step3.component";
import { useStepTracker } from "../../hooks/useStepTracker.hook";
import { useFileParser } from "../../hooks/useFileParser.hook";
import { useBottomActions } from "../../hooks/useBottomActions.hook";

interface IBottomProps {
    setStep: Function;
    showTip: Function;
}

export const Bottom: React.FC<IBottomProps> = ({ setStep, showTip }) => {
    const [file, setFile] = useState<File | null>(null);
    const [productUpdates, setProductUpdates] = useState<Array<ProductUpdate>>(
        []
    );
    const [validationInfo, setValidationInfo] = useState<ValidationInfo | null>(
        null
    );
    const [csvError, setCsvError] = useState<boolean>(false);
    const [serverError, setServerError] = useState<boolean>(false);
    const { onChangeFile, clearFile, validate, update } = useBottomActions({
        setFile,
        setCsvError,
        setServerError,
        setProductUpdates,
        setValidationInfo,
        showTip,
        productUpdates,
    });
    useFileParser({ setProductUpdates, setValidationInfo, file });
    useStepTracker({ setStep, validationInfo, file });

    if (validationInfo && file) {
        return (
            <BottomStyled data-testid="BottomStyled3">
                <Step3
                    update={update}
                    onChangeFile={onChangeFile}
                    clearFile={clearFile}
                    validationInfo={validationInfo}
                    file={file}
                    serverError={serverError}
                />
            </BottomStyled>
        );
    }
    if (file) {
        return (
            <BottomStyled data-testid="BottomStyled2">
                <Step2
                    validate={validate}
                    onChangeFile={onChangeFile}
                    clearFile={clearFile}
                    csvError={csvError}
                    file={file}
                    serverError={serverError}
                />
            </BottomStyled>
        );
    }
    return (
        <BottomStyled data-testid="BottomStyled1">
            <Step1 onChangeFile={onChangeFile} />
        </BottomStyled>
    );
};
