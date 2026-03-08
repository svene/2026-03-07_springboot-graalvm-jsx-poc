package org.svenehrke.demo.web;

import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
public class RuntimeEnvironment {
	private final boolean devMode;

	public RuntimeEnvironment(Environment env) {
		devMode = env.matchesProfiles("dev");
	}

	public boolean isDevMode() {
		return devMode;
	}

}
