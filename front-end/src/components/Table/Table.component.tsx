interface ITable {
    productInfos: Array<ProductInfo> | null | undefined;
}

export const Table: React.FC<ITable> = ({ productInfos }) => {
    if (!productInfos) return null;

    const rows = productInfos.map((p) => (
        <tr key={p.code}>
            <td>{p.code}</td>
            <td>{p.name ?? ""}</td>
            <td>{p.current_sales_price ?? ""}</td>
            <td>{p.new_sales_price}</td>
            <td>{p.warnings ? p.warnings.join("\n") : ""}</td>
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Preço Atual</th>
                    <th>Novo Preço</th>
                    <th>Erros</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
};
