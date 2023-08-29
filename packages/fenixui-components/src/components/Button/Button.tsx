import { ReactNode, forwardRef } from "react";

/*
export type ButtonProps = {
	children: ReactNode;
	onClick: () => void;
};
*/

export interface ButtonProps {
	type?: "submit" | "button" | "reset";

	children?: ReactNode;

	onClick: () => void;

	disabled?: boolean;
}

export const _Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		return <div />;
	},
);

export const Button = ({ children, onClick }: ButtonProps) => {
	return (
		<button type="button" onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
