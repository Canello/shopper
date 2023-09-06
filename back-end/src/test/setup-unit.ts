import { config } from "dotenv";

beforeAll(() => {
    config();
});

beforeEach(() => {
    jest.restoreAllMocks();
});
