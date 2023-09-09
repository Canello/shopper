import { render, screen } from "@testing-library/react";
import { Table } from "./Table.component";
import { invalidValidationInfo } from "../../test/mocks";

describe("Table", () => {
    it("should render without errors", async () => {
        render(<Table productInfos={invalidValidationInfo.product_infos} />);
        const tableElement = screen.getByRole("table");
        expect(tableElement).toBeInTheDocument();
    });
});
