import { render, screen } from "@testing-library/react";
import { Step2 } from "./Step2.component";

describe("Step2", () => {
    it("should render without errors", async () => {
        render(
            <Step2
                clearFile={() => {}}
                validate={() => {}}
                onChangeFile={() => {}}
                file={{ name: "something.csv" } as File}
                csvError={false}
                serverError={false}
            />
        );
        const formElement = screen.getByTestId("Form");
        expect(formElement).toBeInTheDocument();
    });
});
