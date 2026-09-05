import type {Child} from 'hono/jsx'

export const Layout = ({ children }: { children: Child }) => (
	<html>
	<head>
		<script src="http://localhost:35729/livereload.js"></script>
		<link rel="stylesheet" href="/assets/css/main.css"/>
	</head>
	<body>
	<section className="hero is-link">
		<div className="hero-body">
			<nav className="level">
				<div className="level-left">
					<p className="title">People Admin Application</p>
				</div>
				<div className="level-right">
					<button x-on:click="$store.darkMode.toggle()">
						<span className="icon"><i className="material-icons" x-text="icon"></i></span>
					</button>
				</div>
			</nav>
		</div>
	</section>

	{children}

	</body>
	</html>
)
