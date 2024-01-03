import { forwardRef } from "react";
import classnames from "classnames";
import { Color } from "../types";

import type { HTMLAttributes, ReactNode, Ref } from "react";
import { getVariant } from "../common";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	actions?: ReactNode | string[];
	children?: ReactNode | string;
	drag?: boolean;
	header?: ReactNode | undefined;
	name?: string;
	variant?: Color;
}



export const Card = forwardRef(
	(props: CardProps, ref: Ref<HTMLDivElement>) => {
		const {
			children,
            header,
			className,
			variant,
		} = props;

		const variantClass = getVariant(variant || "primary");


		const classNames = {
			base: classnames({
                "rounded-3xl shadow-xl flex flex-col h-full": true,
				[variantClass]: variant,
				[className as string]: className,
			}),
			header: classnames({
                "pt-8 px-8 rounded-t-3x": true
			}),
            content: classnames({
                "items-center min-h-fit p-8": true,
				[variantClass]: variant,

            }),
		};

		return (
			<div className={classNames.base} ref={ref}>
				{header && <div className={classNames.header}>{header}</div>}
				<div className={classNames.content}>{children}</div>
			</div>
		);
	},
);

export const CardDefaults = {
	drag: false,
	header: "",
};

Card.defaultProps = CardDefaults;
