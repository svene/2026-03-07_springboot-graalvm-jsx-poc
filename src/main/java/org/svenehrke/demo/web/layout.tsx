import type {Child} from 'hono/jsx'

export const Layout = ({ children }: { children: Child }) => (
	<html>
	<head>
		<script src="http://localhost:35729/livereload.js"></script>
	</head>
	<body>
	{children}
	</body>
	</html>
)
