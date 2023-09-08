import { Td, TdCentered, Th, Tr } from "./Table.styles";

interface ITable {
    productInfos: Array<ProductInfo> | null | undefined;
}

export const Table: React.FC<ITable> = ({ productInfos }) => {
    if (!productInfos) return null;

    const rows = productInfos.map((p) => {
        const warnings =
            p.warnings?.map((warning, i) => <li key={i}>- {warning}</li>) ?? [];
        return (
            <Tr key={p.code} $isSuccess={!p.warnings}>
                <TdCentered>{p.code}</TdCentered>
                <Td>{p.name ?? ""}</Td>
                <TdCentered>{p.current_sales_price ?? ""}</TdCentered>
                <TdCentered>{p.new_sales_price}</TdCentered>
                <Td>
                    <ul>{warnings}</ul>
                </Td>
            </Tr>
        );
    });

    return (
        <div style={{ overflowX: "auto" }}>
            <table>
                <thead>
                    <tr>
                        <Th>Código</Th>
                        <Th>Nome</Th>
                        <Th>Preço Atual (R$)</Th>
                        <Th>Novo Preço (R$)</Th>
                        <Th>Erros</Th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
};
