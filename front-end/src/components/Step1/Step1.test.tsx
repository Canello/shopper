import { render, screen } from "@testing-library/react";
import { Step1 } from "./Step1.component";

describe("App", () => {
    it("should render without errors", async () => {
        render(<Step1 onChangeFile={() => {}} />);
        // const formElement = screen.getByRole("form");
        // expect(formElement).toBeInTheDocument();
    });
});
