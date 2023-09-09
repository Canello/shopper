import { useEffect } from "react";
import Papa from "papaparse";

interface IUseFileParser {
    setProductUpdates: Function;
    setValidationInfo: Function;
    file: File | null;
}

export const useFileParser = ({
    setProductUpdates,
    setValidationInfo,
    file,
}: IUseFileParser) => {
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

    useEffect(() => {
        parseFileAndSetProductUpdates();
    }, [file]);
};
