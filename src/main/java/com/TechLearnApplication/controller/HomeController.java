package com.TechLearnApplication.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {
	@GetMapping("/homepage")                       // for mapping homepage
	  public String homePage(@RequestParam(value="name", defaultValue="User", required=true) String name, Model model)
	    {
	        model.addAttribute("name", name);
	        return "homepage";
	    }
}
