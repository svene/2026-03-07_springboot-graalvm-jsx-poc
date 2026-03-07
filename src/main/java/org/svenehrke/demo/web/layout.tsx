import {PropsWithChildren} from "preact/compat";
import {ComponentChildren} from "preact";

export const Layout = ({ children }: { children: ComponentChildren }) => (
	<html>
	<body>
	{children}
	</body>
	</html>
)
