export const convertArrayToObject = <Item>(
    items: Array<any>,
    getKey: (item: Item) => string | number,
): { [key: string | number]: Item } => {
    const itemsObj: { [key: string | number]: Item } = {};
    for (const item of items) {
        const key = getKey(item);
        itemsObj[key] = item;
    }
    return itemsObj;
};
