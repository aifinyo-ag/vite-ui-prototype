import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
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
	title: "Example/Button",
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		// Optional parameter to control the view mode of the Canvas. More info: https://storybook.js.org/docs/configure/overview#view-modes

	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	// argTypes: {
	//     size: { control: 'size' },
	// },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Button",
	},
};

//Multiple button displays in one story
export const Size: Story = {
	render: (args: ButtonProps) => (
		<div className="flex flex-col gap-2">
			<Button {...args} size="tiny">
				Tiny
			</Button>
			<Button {...args} size="small">
				Small
			</Button>
			<Button {...args} size="medium">
				Medium
			</Button>
			<Button {...args} size="large">
				Large
			</Button>
		</div>
	),
};

export const Shape: Story = {
	render: (args: ButtonProps) => (
		<div className="flex flex-col gap-2">
			<Button {...args} shape="round">
				round
			</Button>
			<Button {...args} shape="ai">
				aifinyo
			</Button>
			<Button {...args} shape="radius">
				radius
			</Button>
		</div>
	),
};

export const Variants: Story = {
	render: (args: ButtonProps) => (
		<div className="flex gap-2 flex-wrap">
			{Object.values(Colors).map((variant) => {
				return (
					<Button {...args} size="tiny" variant={variant}>
						{variant}
					</Button>
				);
			})}
		</div>
	),
};

export const Outline: Story = {
	args: {
		children: "Button",
		outline: true,
		size: "tiny",
	},
};
export const FullWidth: Story = {
	args: {
		children: "Button",
		fullWidth: true,
		size: "tiny",
	},
};
export const Noborder: Story = {
	args: {
		children: "Button",
		noBorder: true,
		variant: "secondary",
		size: "tiny",
	},
};
export const LoadingState: Story = {
	render: (args: ButtonProps) => (
		<div className="flex flex-col gap-2">
			<Button {...args} shape="round" loading size="tiny">
				round
			</Button>
			<Button {...args} shape="ai" loading size="tiny">
				aifinyo
			</Button>
			<Button {...args} shape="radius" loading size="tiny">
				radius
			</Button>
			<Button {...args} shape="radius" loading size="tiny" />
			<Button {...args} shape="radius" loading size="tiny" variant="secondary"/>
		</div>
	),
};
export const CustomClassname: Story = {
	args: {
		children: "Button",
		size: "tiny",
		className: "bg-red-500 text-yellow-500",
	},
};
