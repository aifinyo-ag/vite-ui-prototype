export type Alignment =
	| "bottom"
	| "left"
	| "right"
	| "side-right"
	| "side-left"
	| "top";

export type Color =
	| "primary"
	| "secondary"
	| "dark"
	| "gray"
	| "light"
	| "alert"
	| "success"
	| "info"
	| "warn"
	| "darkgreen"
	| "mediumgreen"
	| "lightgreen"
	| "darkblue"
	| "blue"
	| "lightblue";

// export type IconTypes = | & Types;

export type HexColor = string & { __hexColor: never };

export type Message = "alert" | "info" | "success" | "warn";

export type PatternTypes =
	| "alpha"
	| "bic"
	| "currency"
	| "default"
	| "float"
	| "iban"
	| "int"
	| "twodigits"
	| "sepaMandat"
	| "vatID";

export type Shape = "ai" | "radius" | "round";

export type Size = "tiny" | "small" | "medium" | "large";
