import { HTMLAttributes, useState } from "react";
import { Size } from "../types";
import classNames from "classnames";

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
	header?: React.ReactNode;
	children: React.ReactNode;
	size?: Size;
	className?: string;
	contentClassName?: string;
	fullWidth?: boolean;
}

const sizes = {
	large: "w-96",
	medium: "w-64",
	small: "w-48",
	tiny: "w-32",
};
export const Accordion = ({
	header,
	children,
	size,
	fullWidth,
	className,
	contentClassName,
	...props
}: AccordionProps) => {
	const [active, setActive] = useState(false);

	const buttonClassNames = classNames({
		"rounded-t-xl": active,
		"rounded-xl": !active,
		"flex w-full items-center justify-between gap-3 border-0 p-5 font-medium text-gray-500 shadow-lg shadow-gray-300 hover:bg-gray-100 rtl:text-right dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800":
			true,
		[className || ""]: true,
	});
	const svgClassNames = classNames({
		"rotate-180": active,
		"rotate-90": !active,
		"h-3 w-3 shrink-0 rotate-180 transition-all": true,
	});

	const childrenClassNames = classNames({
		"rounded-b-xl  shadow-lg shadow-gray-300 dark:border-gray-700 dark:bg-gray-900":
			true,
		[contentClassName || ""]: true,
	});

	return (
		<div
			id="accordion-collapse"
			data-accordion="collapse"
			data-testid="accordion-collapse"
			className={`${sizes[size || "medium"]} ${fullWidth ? "w-full" : ""}`}
			{...props}
		>
			<h2
				id="accordion-collapse-heading"
				data-testid="accordion-collapse-heading"
			>
				<button
					onClick={() => setActive(!active)}
					type="button"
					className={buttonClassNames}
					data-accordion-target="#accordion-collapse-body-1"
					aria-expanded="true"
					aria-controls="accordion-collapse-body-1"
					data-testid="accordion-collapse-body"
				>
					<span>{header}</span>
					<svg
						data-accordion-icon
						className={svgClassNames}
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 10 6"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 5 5 1 1 5"
						/>
					</svg>
				</button>
			</h2>
			<div
				id="accordion-collapse-body"
				data-testid="accordion-content"
				className={`${
					active ? "block" : "hidden"
				} transition-all ${childrenClassNames}`}
				aria-labelledby="accordion-collapse-heading"
			>
				{children}
			</div>
		</div>
	);
};

Accordion.defaultProps = {
	size: "tiny" as Size,
	header: "Accordion Header",
	children: "Accordion Content",
	fullWidth: false,
};
