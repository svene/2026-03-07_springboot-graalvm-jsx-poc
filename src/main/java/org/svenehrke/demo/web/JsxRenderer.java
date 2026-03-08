package org.svenehrke.demo.web;

import jakarta.annotation.PostConstruct;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;
import org.graalvm.polyglot.proxy.ProxyObject;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;

@Service
public class JsxRenderer {

	private Context context;
	private Value renderPageFunction;
	private final String entryFunction = "renderPage"; // TODO: make it configurable?

	public JsxRenderer() {
	}

	@PostConstruct
	public void init() throws IOException {
		context = Context.newBuilder("js").allowAllAccess(true).build();
		context.eval("js", """
			class TextEncoder {
			  encode(str) {
				// Convert string to UTF-8 bytes
				const bytes = [];
				for (let i = 0; i < str.length; i++) {
				  const code = str.charCodeAt(i);
				  if (code < 0x80) {
					bytes.push(code);
				  } else if (code < 0x800) {
					bytes.push(0xc0 | (code >> 6));
					bytes.push(0x80 | (code & 0x3f));
				  } else {
					bytes.push(0xe0 | (code >> 12));
					bytes.push(0x80 | ((code >> 6) & 0x3f));
					bytes.push(0x80 | (code & 0x3f));
				  }
				}
				return Uint8Array.from(bytes);
			  }
			}
			""");
		context.eval("js", "var module = {exports:{}}; var exports = module.exports;");

		Source source = Source.newBuilder("js", new File("target/classes/static/fe/ssr.js")).build();
		context.eval(source);

		renderPageFunction = context.getBindings("js")
			.getMember("module")
			.getMember("exports")
			.getMember(entryFunction);

		if (!renderPageFunction.canExecute()) {
			throw new RuntimeException("'%s 'is undefined or not executable".formatted(entryFunction));
		}
	}

	public String renderPage(String name, int age) {
		try {
			init();
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
		Value result = renderPageFunction.execute(
			ProxyObject.fromMap(
				java.util.Map.of(
					"user",
					java.util.Map.of(
						"name", name,
						"age", age
					)
				)
			)
		);
		return result.asString();
	}}
