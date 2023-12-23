import { describe, expect,it,vi } from "vitest";
import { render, screen, userEvent } from "../test/test-utils";
import {Button } from "./Button";

describe("Button", () => {
	it("should render with children", () => {
		render(<Button>asd</Button>);
		expect(screen.getByText(/asd/i)).toBeDefined();
	});

    it("should render with children", async () => {
        const onClick = vi.fn();
        render(<Button onClick={onClick}>asd</Button>);
        await userEvent.click(screen.getByText(/asd/i));
        expect(onClick).toHaveBeenCalled();
	});
});
