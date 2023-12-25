import { forwardRef } from "react";
import classnames from "classnames";
import type { Color, Shape, Size } from "../types.tsx";
import { getVariant } from "../common.ts";

import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode | string;
	className?: string;
	disabled?: boolean;
	fullWidth?: boolean;
	iconButton?: boolean;
	iconPrefix?: unknown;
	iconSuffix?: unknown;
	iconSpin?: boolean;
	noBorder?: boolean;
	onClick?: () => void;
	outline?: boolean;
	overflow?: boolean;
	plain?: boolean;
	shape?: Shape;
	size?: Size;
	value?: string | number;
	variant?: Color;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			className,
			disabled,
			fullWidth,
			noBorder,
			onClick,
			outline,
			shape,
			size,
			value,
			variant,
			...props
		},
		ref,
	) => {
		const variantClass = getVariant(variant || "primary");
		const classNames = classnames({
			"relative w-fit inline-flex cursor-pointer select-none items-center justify-center gap-x-4 whitespace-nowrap rounded-full align-middle text-2xl":
				true,
			"hover:border hover:bg-hover hover:text-primary hover:border-primary ":
				true,
			"h-10 text-xl": size === "tiny",
			"h-12 text-2xl": size === "small",
			"h-14 text-3xl": size === "medium",
			"h-16 text-4xl": size === "large",
			"rounded-br-none": shape === "ai",
			"rounded-md": shape === "radius",
			[variantClass]: variant,
			"bg-transparent border-primary !text-primary": outline,
			"w-full": fullWidth,
			"border-transparent bg-transparent text-primary": noBorder,
			[`${className}`]: className,
		});

		return (
			<button
				type="button"
				{...props}
				className={classNames}
				disabled={disabled}
				ref={ref}
				tabIndex={0}
				value={value}
				onClick={onClick}
			>
				<span className="children">{children}</span>
			</button>
		);
	},
);

export const ButtonDefaults = {
	disabled: false,
	fullWidth: false,
	// iconButton: false,
	// iconSpin: false, 
	noBorder: false,
	outline: false,
	// overflow: false,
	shape: "round" as Shape,
	variant: "primary" as Color,
};

Button.defaultProps = ButtonDefaults;
