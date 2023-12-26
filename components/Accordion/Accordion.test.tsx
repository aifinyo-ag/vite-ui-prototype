import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, userEvent } from "../test/test-utils";
import { Accordion } from "./Accordion";

describe("<Accordion>", () => {
	it("renders", () => {
		const accordion = render(<Accordion />);
		expect(accordion).toBeDefined();
	});
	it("Content will have block class when it is clicked", async () => {
		const accordion = render(
			<Accordion data-testid="test">
				<div data-testid="content">Test123</div>
			</Accordion>,
		);
		await userEvent.click(accordion.getByTestId("accordion-collapse-body"));
		expect(accordion.getByTestId("accordion-content")).toHaveClass("block");
	});
	it("will have w-full class when fullWidth props is true", async () => {
		const accordion = render(<Accordion fullWidth>Test123</Accordion>);
		await userEvent.click(accordion.getByTestId("accordion-collapse"));
		expect(accordion.getByTestId("accordion-collapse")).toHaveClass("w-full");
	});
	it("will have w-64 class when size is medium", async () => {
		const accordion = render(<Accordion size="medium">Test123</Accordion>);
		expect(accordion.getByTestId("accordion-collapse")).toHaveClass("w-64");
	});
	afterEach(() => {
		vi.resetAllMocks();
		cleanup();
	});
});
