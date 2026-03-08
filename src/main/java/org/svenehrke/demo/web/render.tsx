import { renderToString } from 'hono/jsx/dom/server';
import {Page} from "./page";
import {User} from "./models";

export function renderPage(props: User): string {
	return renderToString(<Page {...props} />)
}
