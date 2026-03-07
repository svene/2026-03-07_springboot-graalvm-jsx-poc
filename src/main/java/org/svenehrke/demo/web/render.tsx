import { renderToString } from 'hono/jsx/dom/server';
import {Page} from "./page";
import {User} from "./models";

export function renderPage(props: User): string {
	return renderToString(<Page {...props} />)
}
// export async function renderUserPagex(props: { message: string }) {
// 	const stream = renderToString(<Page {...props} />)
// 	return await new Response(stream).text()
// }
