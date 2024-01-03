import { describe, expect, it, vi, afterEach } from "vitest";
import { cleanup, render } from "../test/test-utils";
import { Card } from "./Card";

describe("Card", () => {
	it("should render with children", () => {
		const card = render(<Card>asd</Card>);
		expect(card).toBeDefined();
	});

	afterEach(() => {
		vi.resetAllMocks();
		cleanup();
	});
});
