import { render, screen } from "@testing-library/react";
import { Bottom } from "./Bottom.component";

describe("Bottom", () => {
    it("should render without errors", async () => {
        render(<Bottom showTip={() => {}} setStep={() => {}} />);
        const bottomElement = screen.getByTestId("BottomStyled");
        expect(bottomElement).toBeInTheDocument();
    });
});
