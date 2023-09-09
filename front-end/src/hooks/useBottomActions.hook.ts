import { FormEventHandler } from "react";
import {
    updateProducts,
    validateProductUpdates,
} from "../services/products.service";
import { RESPONSE_STATUS, SERVER_ERROR } from "../utils/constants";

interface IUseBottomActions {
    setFile: Function;
    setCsvError: Function;
    setProductUpdates: Function;
    setValidationInfo: Function;
    showTip: Function;
    setServerError: Function;
    productUpdates: Array<ProductUpdate>;
}

export const useBottomActions = ({
    setFile,
    setCsvError,
    setProductUpdates,
    setValidationInfo,
    showTip,
    setServerError,
    productUpdates,
}: IUseBottomActions) => {
    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (!file) return;
        setFile(file);
        setCsvError(false);
        setServerError(false);
    };

    const clearFile: FormEventHandler = (e) => {
        e.preventDefault();
        setFile(null);
        setProductUpdates([]);
        setValidationInfo(null);
        setCsvError(false);
        setServerError(false);
    };

    const validate: FormEventHandler = async (e) => {
        e.preventDefault();
        const validation = await validateProductUpdates(productUpdates);
        if (validation === SERVER_ERROR) return setServerError(true);
        if (validation.status === RESPONSE_STATUS.FAILED)
            return setCsvError(true);
        setValidationInfo(validation.data);
    };

    const update: FormEventHandler = async (e) => {
        e.preventDefault();
        const response = await updateProducts(productUpdates);
        if (response === SERVER_ERROR) return setServerError(true);
        if (response.status === RESPONSE_STATUS.OK) {
            clearFile(e);
            showTip();
        }
    };

    return {
        onChangeFile,
        clearFile,
        validate,
        update,
    };
};
