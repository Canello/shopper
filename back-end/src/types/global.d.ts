type ProductUpdate = {
    code: number;
    sales_price: number;
};

type ValidationWarnings = null | {
    [key: string | number]: Array<string>;
};

type Validation = { validationWarnings: ValidationWarnings };
