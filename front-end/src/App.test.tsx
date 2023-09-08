import { render, screen } from "@testing-library/react";
import App from "./App.component";

describe("App", () => {
    it("should render without errors", async () => {
        render(<App />);
        const appElement = screen.getByTestId("AppStyled");
        expect(appElement).toBeInTheDocument();
    });
});
