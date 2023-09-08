import { Td, TdCentered, Th, Tr } from "./Table.styles";

interface ITable {
    productInfos: Array<ProductInfo> | null | undefined;
}

export const Table: React.FC<ITable> = ({ productInfos }) => {
    if (!productInfos) return null;

    const rows = productInfos.map((p) => (
        <Tr key={p.code} $isSuccess={!p.warnings}>
            <TdCentered>{p.code}</TdCentered>
            <Td>{p.name ?? ""}</Td>
            <TdCentered>
                {p.current_sales_price?.replace(".", ",") ?? ""}
            </TdCentered>
            <TdCentered>{p.new_sales_price?.replace(".", ",")}</TdCentered>
            <Td>{p.warnings ? p.warnings.join("\n") : ""}</Td>
        </Tr>
    ));

    return (
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
    );
};
