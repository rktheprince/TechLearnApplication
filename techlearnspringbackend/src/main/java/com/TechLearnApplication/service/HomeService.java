package com.TechLearnApplication.service;

import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class HomeService {
	
	//for mapping homepage.html
	public String homePage(String name, Model model)
    {
        model.addAttribute("name", name);
        return "homepage";
    }
}
