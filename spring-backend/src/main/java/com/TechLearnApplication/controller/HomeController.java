package com.TechLearnApplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.TechLearnApplication.service.HomeService;

@Controller
@CrossOrigin(origins="http://localhost:3000")
public class HomeController {
	
	@Autowired
	private HomeService homeService;
	
	@GetMapping("/homepage")                       
	public String homePage(@RequestParam(value="name", defaultValue="User", required=true) String name, Model model)
	{
		return homeService.homePage(name, model);
	}
}
