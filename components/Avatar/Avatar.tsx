import classnames from "classnames";
import type { Color, Size, HexColor } from "../types.tsx";

import type { HTMLAttributes } from "react";

import { getVariant } from "../common.ts";

export interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
	alt?: string;
	className?: string;
	initials?: string;
	size?: Size;
	src?: string;
	variant?: Color | HexColor;
	onClick?: () => void;
}

const isHex = (str: string): str is HexColor => /^#[0-9A-F]{6}$/i.test(str);

export const setInitials = (name = "", color = "#FFFFFF"): string => {
	return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="-100 -100 200 200">
            <text x="0" y="0"
                font-size="85"
                font-family="Helvetica, sans-serif"
                fill="${encodeURIComponent(
									color,
								)}" text-anchor="middle" dy=".36em"
            >
                ${name}
            </text>
        </svg>`;
};

export const Avatar = ({
	alt,
	className,
	initials,
	onClick,
	size,
	src,
	variant,
    ...props
}: AvatarProps) => {

    const variantClass = getVariant(variant as Color || "primary");

	const wrapperClassNames = classnames({
		"rounded-full overflow-hidden ": true,
		"inline-flex items-center w-min gap-x-3": true,
        "h-6": size === "tiny",
		"h-8": size === "small",
		"h-14": size === "medium",
		"h-[4.5rem]": size === "large",
		"cursor-pointer": typeof onClick === "function",
		[variantClass]: !src,
		[className || ""]: true,
	});
	return (
		<img
            {...props}
			alt={alt}
			role="presentation"
			src={src || "#"}
			className={wrapperClassNames}
            style={{ backgroundColor: isHex(variant as Color | HexColor) ? variant : "" }}
			onClick={onClick && onClick}
			onError={(x) => {
				x.currentTarget.onerror = null;
				x.currentTarget.src = `data:image/svg+xml;utf8,${setInitials(
					initials,
				)}`;
			}}
		/>
	);
};

Avatar.defaultProps = {
	initials: "",
	size: "large" as Size,
	variant: "primary" as Color | HexColor,
};
