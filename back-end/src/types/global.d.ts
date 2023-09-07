type ProductUpdate = {
    code: number;
    sales_price: number;
};

type ValidationWarnings = null | {
    [key: string | number]: Array<string>;
};

type Validation = { validationWarnings: ValidationWarnings };

type Obj<T> = { [key: string | number]: T };

type PackSalesPrice = { pack_id: number; pack_sales_price: number };
