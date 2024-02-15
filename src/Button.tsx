import { clsx } from "clsx";
import { type JSX } from "solid-js";
import {
	getButtonClasses,
	type ButtonProps,
} from "@e3m-io/css-ds/components/Button";

export const Button = (
	props: JSX.HTMLAttributes<HTMLButtonElement> & ButtonProps,
) => {
	const { variant, weight, ...rest } = props;

	return (
		<button {...rest} class={clsx(props.class, getButtonClasses(props))} />
	);
};
