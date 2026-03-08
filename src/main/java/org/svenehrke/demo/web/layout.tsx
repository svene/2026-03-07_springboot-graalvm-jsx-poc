import type {Child} from 'hono/jsx'

export const Layout = ({ children }: { children: Child }) => (
	<html>
	<body>
	{children}
	</body>
	</html>
)
