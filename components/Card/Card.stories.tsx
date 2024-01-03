import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";


const meta = {
	title: "Example/Card",
	component: Card,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		// Optional parameter to control the view mode of the Canvas. More info: https://storybook.js.org/docs/configure/overview#view-modes
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	args: {
		// initials: "AB",
		// variant: "primary",
	},
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithHeader: Story = {
	args: {
		children: "yoyo",
        header: "header",
	},
};
export const WithoutHeader: Story = {
	args: {
		children: "yoyo",
	},
};




//Multiple button displays in one story
// export const Size: Story = {
// 	render: (args: AvatarProps) => (
// 		<div className="flex flex-col gap-2">
// 			<Avatar {...args} size="tiny" />
// 			<Avatar {...args} size="small" />
// 			<Avatar {...args} size="medium" />
// 			<Avatar {...args} size="large" />
// 		</div>
// 	),
// };

// export const Variants: Story = {
// 	render: (args: AvatarProps) => (
// 		<div className="flex flex-wrap gap-2">
// 			{Object.values(Colors).map((variant) => {
// 				return <Avatar {...args} size="large" variant={variant} />;
// 			})}
// 		</div>
// 	),
// };
