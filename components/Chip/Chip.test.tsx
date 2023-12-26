import { cleanup, render } from "../test/test-utils";
import { describe, expect, it, vi, afterEach } from "vitest";

import { Chip } from "./Chip";

describe("<Chip>", () => {
	it("should render with children", () => {
		const chip = render(<Chip>asd</Chip>);
		expect(chip).toBeDefined();
	});
	it("should render witout children", () => {
		const chip = render(<Chip />);
		expect(chip).toBeDefined();
	});

	it("should render with custom classnames", () => {
		const chip = render(<Chip className="testest" data-testid='Chip'/>);
		expect(chip.getByTestId('Chip')).toHaveClass('testest');
	});
	afterEach(() => {
		vi.resetAllMocks();
		cleanup();
	});
});
