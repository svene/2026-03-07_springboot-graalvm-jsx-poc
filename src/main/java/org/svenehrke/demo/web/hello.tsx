import {render, h} from "preact";

export const Hello = (props: { message: string }) => (
	<div>Hello Component: {props.message}</div>
);
export {render, h}
