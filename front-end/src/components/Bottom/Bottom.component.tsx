import React, { FormEventHandler, useEffect, useState } from "react";
import Papa from "papaparse";
import { BottomStyled } from "./Bottom.styles";
import { Step1 } from "../Step1/Step1.component";
import { Step2 } from "../Step2/Step2.component";
import { Step3 } from "../Step3/Step3.component";
import {
    updateProducts,
    validateProductUpdates,
} from "../../services/products.service";

interface IBottomProps {
    step: 1 | 2 | 3;
    setStep: Function;
    showTip: Function;
}

export const Bottom: React.FC<IBottomProps> = ({ step, setStep, showTip }) => {
    const [file, setFile] = useState<File | null>(null);
    const [productUpdates, setProductUpdates] = useState<Array<ProductUpdate>>(
        []
    );
    const [validationInfo, setValidationInfo] = useState<ValidationInfo | null>(
        null
    );
    const [csvError, setCsvError] = useState<boolean>(false);

    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (!file) return;
        setFile(file);
        setCsvError(false);
    };

    const parseFileAndSetProductUpdates = () => {
        if (!file) return;
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                const updates = (
                    results.data as Array<ProductUpdateFromCsv>
                ).map(({ product_code, new_price }) => {
                    return { code: +product_code, sales_price: +new_price };
                });
                setProductUpdates(updates);
                setValidationInfo(null);
            },
        });
    };

    const clearFile: FormEventHandler = (e) => {
        e.preventDefault();
        setFile(null);
        setProductUpdates([]);
        setValidationInfo(null);
    };

    useEffect(() => {
        parseFileAndSetProductUpdates();
    }, [file]);

    const validate: FormEventHandler = async (e) => {
        e.preventDefault();
        const validation = await validateProductUpdates(productUpdates);
        if (validation.status === "failed") return setCsvError(true);
        setValidationInfo(validation.data);
    };

    const update: FormEventHandler = async (e) => {
        e.preventDefault();
        const response = await updateProducts(productUpdates);
        if (response.status === "ok") clearFile(e);
        showTip();
    };

    const updateStep = () => {
        if (validationInfo) setStep(3);
        else if (file) setStep(2);
        else setStep(1);
    };

    useEffect(() => {
        updateStep();
    }, [validationInfo, file]);

    if (validationInfo && file) {
        return (
            <BottomStyled>
                <Step3
                    update={update}
                    onChangeFile={onChangeFile}
                    clearFile={clearFile}
                    validationInfo={validationInfo}
                    file={file}
                />
            </BottomStyled>
        );
    }
    if (file) {
        return (
            <BottomStyled>
                <Step2
                    validate={validate}
                    onChangeFile={onChangeFile}
                    clearFile={clearFile}
                    csvError={csvError}
                    file={file}
                />
            </BottomStyled>
        );
    }
    return (
        <BottomStyled>
            <Step1 onChangeFile={onChangeFile} />
        </BottomStyled>
    );
};
