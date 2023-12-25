import { describe, expect, it,  vi, afterEach } from "vitest";
import { cleanup, render, userEvent } from "../test/test-utils";
import { Button } from "./Button";

describe("Button", () => {
	it("should render with children", () => {
		const button = render(<Button>asd</Button>);
		expect(button).toBeDefined();
	});

	it("should fire onClick when it is clicked", async () => {
		const onClick = vi.fn();
		const button = render(<Button onClick={onClick}>asd</Button>);
		await userEvent.click(button.getByText(/asd/i));
		expect(onClick).toHaveBeenCalled();
	});

	afterEach(() => {
		vi.resetAllMocks();
		cleanup();
	});
});
