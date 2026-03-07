import {render, h} from "preact";
import {Layout} from "./layout";
import {User} from "./models";

export const Page = (props: User) => (
	<Layout>
		<div>Namexxxxxx: {props.user.name}</div>
		<div>Age: {props.user.age}</div>
	</Layout>
);
export {render, h}
