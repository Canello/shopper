export const makeReq = (productUpdates: any, validationWarnings: any) => {
    return {
        body: {
            product_updates: productUpdates,
            validationWarnings,
        },
    } as any;
};

export const makeProducts = (save = () => {}) => [
    {
        code: 16,
        name: "Something",
        cost_price: "10.00",
        sales_price: "10.50",
        save,
    },
    {
        code: 18,
        name: "Something2",
        cost_price: "10.00",
        sales_price: "10.50",
        save,
    },
    {
        code: 20,
        name: "Something3",
        cost_price: "10.00",
        sales_price: "10.50",
        save,
    },
];

export const validProductUpdates = [
    { code: 16, sales_price: 11 },
    { code: 18, sales_price: 11 },
    { code: 20, sales_price: 11 },
];

export const invalidProductUpdates = [
    { code: 16, sales_price: 23 },
    { code: 17, sales_price: 23 },
    { code: 18, sales_price: 11 },
    { code: 20, sales_price: 23 },
];

export const validationWarnings = {
    16: ["Variação de preço maior que 10%."],
    17: ["Não existe um produto com esse código."],
    18: null,
    20: [
        "Preço máximo excedido. Preço máximo: R$ 9999999.99",
        "Variação de preço maior que 10%.",
    ],
};
