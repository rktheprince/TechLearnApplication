package com.TechLearnApplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.TechLearnApplication.model.Login;
import com.TechLearnApplication.service.LoginService;

 

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class LoginController {
    @Autowired
    private LoginService loginService;
   
    @PostMapping("/login")                   
    public String log(@RequestBody Login login) 
    {
        return loginService.log(login);
	}
    
	@PutMapping("/updatePass")
    public String updateUser(@RequestBody Login login)
	{
		return loginService.updateUser(login);
     }

}