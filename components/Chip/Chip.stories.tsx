import type { Meta, StoryObj } from "@storybook/react";
import { Chip, ChipProps } from "./Chip";
import type { Color } from "../types";


const Colors = [
	"primary",
	"secondary",
	"dark",
	"gray",
	"light",
	"alert",
	"success",
	"info",
	"warn",
	"darkgreen",
	"mediumgreen",
	"lightgreen",
	"darkblue",
	"blue",
	"lightblue",
] as Color[];


const meta = {
	title: "Example/Chip",
	component: Chip,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		// Optional parameter to control the view mode of the Canvas. More info: https://storybook.js.org/docs/configure/overview#view-modes
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	args: {
		variant: "primary",
	},
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
        children: "Chip",
	},
};

export const Small: Story = {
	args: {
		small: true,
		children: "Chip",
	},
};


export const Variants: Story = {
    args: {
        children: "",
    },
	render: (args: ChipProps) => (
		<div className="flex flex-wrap gap-2">
			{Object.values(Colors).map((variant) => {
				return (
					<Chip {...args}  variant={variant}>
						{variant}
					</Chip>
				);
			})}
		</div>
	),
};
