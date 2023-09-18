export const convertArrayToObject = <Item>(
    items: Array<Item>,
    getKey: (item: Item) => string | number,
): Obj<Item> => {
    const itemsObj: Obj<Item> = {};
    for (const item of items) {
        const key = getKey(item);
        itemsObj[key] = item;
    }
    return itemsObj;
};

export const waitFor = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};
