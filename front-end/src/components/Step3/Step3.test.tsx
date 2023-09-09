import { render, screen } from "@testing-library/react";
import { Step3 } from "./Step3.component";
import { invalidValidationInfo } from "../../test/mocks";

describe("Step3", () => {
    it("should render without errors", async () => {
        render(
            <Step3
                clearFile={() => {}}
                onChangeFile={() => {}}
                update={() => {}}
                validationInfo={invalidValidationInfo}
                file={{ name: "something.csv" } as File}
                serverError={false}
            />
        );
        const formElement = screen.getByTestId("Form");
        expect(formElement).toBeInTheDocument();
    });
});
