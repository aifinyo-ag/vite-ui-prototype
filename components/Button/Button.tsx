import { forwardRef } from "react";
import classnames from "classnames";
import type { Color, Shape, Size } from "../types.tsx";

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
			"bg-primary border-primary text-white": variant === "primary",
			"bg-secondary border-secondary": variant === "secondary",
			"bg-dark border-dark text-white": variant === "dark",
			"bg-gray border-gray": variant === "gray",
			"bg-light border-light": variant === "light",
			"bg-alert border-alert text-white": variant === "alert",
			"bg-success border-success text-white": variant === "success",
			"bg-info border-info": variant === "info",
			"bg-warn border-warn": variant === "warn",
			"bg-darkgreen border-darkgreen text-white": variant === "darkgreen",
			"bg-mediumgreen border-mediumgreen text-white": variant === "mediumgreen",
			"bg-lightgreen border-lightgreen": variant === "lightgreen",
			"bg-darkblue border-darkblue  text-white": variant === "darkblue",
			"bg-blue border-blue": variant === "blue",
			"bg-lightblue border-lightblue": variant === "lightblue",
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
	iconButton: false,
	iconSpin: false, 
	noBorder: false,
	outline: false,
	overflow: false,
	shape: "round" as Shape,
	variant: "primary" as Color,
};

Button.defaultProps = ButtonDefaults;
