export const makeReq = (productUpdates: any) => {
    return {
        body: {
            product_updates: productUpdates,
        },
    } as any;
};

export const validProducts = [
    {
        code: 16,
        name: "Something",
        cost_price: "10.00",
        sales_price: "10.50",
    },
    {
        code: 18,
        name: "Something2",
        cost_price: "10.00",
        sales_price: "10.50",
    },
    {
        code: 20,
        name: "Something3",
        cost_price: "10.00",
        sales_price: "10.50",
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
    { code: 20, sales_price: 9999999999999 },
    { code: 21, sales_price: 8 },
];

export const validationWarnings = {
    16: ["Variação de preço maior que 10%."],
    17: ["Não existe um produto com esse código."],
    20: [
        "Preço máximo excedido. Preço máximo: R$ 9999999.99",
        "Variação de preço maior que 10%.",
    ],
    21: [
        "Preço abaixo do custo (R$ 10.00).",
        "Variação de preço maior que 10%.",
    ],
};

export const invalidProducts = [
    {
        code: 16,
        name: "Something",
        cost_price: "10.00",
        sales_price: "10.50",
    },
    {
        code: 18,
        name: "Something2",
        cost_price: "10.00",
        sales_price: "10.50",
    },
    {
        code: 20,
        name: "Something3",
        cost_price: "10.00",
        sales_price: "10.50",
    },
    {
        code: 21,
        name: "Something4",
        cost_price: "10.00",
        sales_price: "10.50",
    },
];
