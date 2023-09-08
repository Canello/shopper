type ProductUpdateFromCsv = {
    product_code: string;
    new_price: string;
};

type ProductUpdate = {
    code: number;
    sales_price: number;
};

type ProductInfo = {
    exists: boolean;
    code: number;
    name: string | null;
    current_sales_price: number | null;
    new_sales_price: number;
    warnings: Array<String> | null;
};

type ValidationInfo = {
    is_valid: boolean;
    product_infos: Array<ProductInfo>;
};
