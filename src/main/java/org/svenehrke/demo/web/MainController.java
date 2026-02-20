package org.svenehrke.demo.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;
import org.svenehrke.demo.core.Person;

import java.util.List;

@RestController
public class MainController {

	@GetMapping("/")
	public RedirectView index() {
		return new RedirectView("/persons");
	}
	@GetMapping("/persons")
	public List<Person> persons()
	{
		return List.of(new Person("John", "Doe"), new Person("Jane", "Doe"));
	}

}
