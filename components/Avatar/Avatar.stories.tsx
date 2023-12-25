import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "./Avatar";
import type { Color, HexColor } from "../types";

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
	title: "Example/Avatar",
	component: Avatar,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		// Optional parameter to control the view mode of the Canvas. More info: https://storybook.js.org/docs/configure/overview#view-modes
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
    args: {
        initials: "AB",
        variant: "primary",
    }
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSource: Story = {
	args: {
		src: "https://i.pravatar.cc/100",
	},
};
export const WithoutSource: Story = {
	args: {
		variant: "primary",
	},
};

export const WithCustomHex: Story = {
	args: {
		variant: "#FF0000" as HexColor,
	},
};
export const DifferentInitals: Story = {
	args: {
		initials: "AI",
	},
};

//Multiple button displays in one story
export const Size: Story = {
	render: (args: AvatarProps) => (
		<div className="flex flex-col gap-2">
			<Avatar {...args} size="tiny"/>
			<Avatar {...args} size="small"/>
			<Avatar {...args} size="medium"/>
			<Avatar {...args} size="large"/>
		</div>
	),
};

export const Variants: Story = {
	render: (args: AvatarProps) => (
		<div className="flex flex-wrap gap-2">
			{Object.values(Colors).map((variant) => {
				return (
					<Avatar {...args} size="large" variant={variant}/>
				);
			})}
		</div>
	),
};