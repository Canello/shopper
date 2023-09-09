import { render, screen } from "@testing-library/react";
import { Bottom } from "./Bottom.component";

jest.mock("../../hooks/useBottomActions.hook", () => {
    return {
        useBottomActions: () => {
            return {
                onChangeFile: () => {},
                clearFile: () => {},
                validate: () => {},
                update: () => {},
            };
        },
    };
});

describe("Bottom", () => {
    it("should first render Step1", async () => {
        render(<Bottom showTip={() => {}} setStep={() => {}} />);
        const bottomElement = screen.getByTestId("BottomStyled1");
        expect(bottomElement).toBeInTheDocument();
    });
});
