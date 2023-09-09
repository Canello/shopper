import { render, screen } from "@testing-library/react";
import { Step1 } from "./Step1.component";

describe("Step1", () => {
    it("should render without errors", async () => {
        render(<Step1 onChangeFile={() => {}} />);
        const formElement = screen.getByTestId("Form");
        expect(formElement).toBeInTheDocument();
    });
});
