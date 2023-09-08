import React, { FormEventHandler, useEffect, useRef, useState } from "react";
import Papa from "papaparse";
import { Button } from "../Button/Button.component";
import {
    updateProducts,
    validateProductUpdates,
} from "../../services/products.service";
import { FormStyled } from "./Form.styles";

interface IFormProps {
    setValidationInfo: Function;
}

export const Form: React.FC<IFormProps> = ({ setValidationInfo }) => {
    const inputRef = useRef(null);
    const [file, setFile] = useState<File | null>(null);
    const [productUpdates, setProductUpdates] = useState<Array<ProductUpdate>>(
        []
    );

    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (!file) return;
        setFile(file);
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
            },
        });
    };

    useEffect(() => {
        parseFileAndSetProductUpdates();
    }, [file]);

    const validate: FormEventHandler = async (e) => {
        e.preventDefault();
        const validation = await validateProductUpdates(productUpdates);
        setValidationInfo(validation.data);
    };

    const update: FormEventHandler = async (e) => {
        e.preventDefault();
        const response = await updateProducts(productUpdates);
        if (response.status === "ok") {
            if (inputRef.current) {
                (inputRef.current as HTMLInputElement).value = "";
            }
            setFile(null);
            setProductUpdates([]);
            setValidationInfo(null);
        }
    };

    return (
        <FormStyled>
            <input
                ref={inputRef}
                type="file"
                accept=".csv"
                onChange={onChangeFile}
            />
            <Button onClick={validate}>Validar</Button>
            <Button onClick={update}>Atualizar Preços</Button>
        </FormStyled>
    );
};
