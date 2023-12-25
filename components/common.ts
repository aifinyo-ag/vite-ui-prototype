import { Color, HexColor } from "./types";
type Variants = {
	[key in Color]: string;
};

const isHex = (str: string): str is HexColor => /^#[0-9A-F]{6}$/i.test(str);

const variants: Variants = {
	primary: "bg-primary border-primary text-white",
	secondary: "bg-secondary border-secondary",
	dark: "bg-dark border-dark text-white",
	gray: "bg-gray border-gray",
	light: "bg-light border-light",
	alert: "bg-alert border-alert text-white",
	success: "bg-success border-success text-white",
	info: "bg-info border-info",
	warn: "bg-warn border-warn",
	darkgreen: "bg-darkgreen border-darkgreen text-white",
	mediumgreen: "bg-mediumgreen border-mediumgreen text-white",
	lightgreen: "bg-lightgreen border-lightgreen",
	darkblue: "bg-darkblue border-darkblue  text-white",
	blue: "bg-blue border-blue",
	lightblue: "bg-lightblue border-lightblue",
};

export const getVariant = (variant: Color) => {
	return isHex(variant) ? "" : variants[variant];
};
