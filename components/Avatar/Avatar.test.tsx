import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, userEvent } from "../test/test-utils";
import { Avatar } from "./Avatar";

describe("<Avatar>", () => {
	it("renders when src is given", () => {
		const avatar = render(<Avatar className="test" src="#" />);
		expect(avatar).toBeDefined();
	});

	it("renders anyway when src is broken", () => {
		const avatar = render(<Avatar className="test" src="" />);
		expect(avatar).toBeDefined();
	});

	it("fire onClick when it is clicked", async () => {
		const onClick = vi.fn();
		const avatar = render(
			<Avatar data-testid="test" src="" onClick={onClick} />,
		);
		await userEvent.click(avatar.getByTestId("test"));
		expect(onClick).toHaveBeenCalled();
	});
	afterEach(() => {
		vi.resetAllMocks();
		cleanup();
	});
});
