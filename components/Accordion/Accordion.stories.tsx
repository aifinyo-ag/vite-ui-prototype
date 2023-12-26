import type { Meta,StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta = {
	title: "Example/Accordion",
	component: Accordion,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		// Optional parameter to control the view mode of the Canvas. More info: https://storybook.js.org/docs/configure/overview#view-modes
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
        children: "Accordion",
        header: "Accordion",
	},
};
export const FullWidth: Story = {
	args: {
		children: "Accordion",
		header: "Accordion",
        fullWidth: true,
	},
};


