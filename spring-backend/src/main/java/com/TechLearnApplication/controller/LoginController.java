package com.TechLearnApplication.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.TechLearnApplication.exception.TechLearnException;
import com.TechLearnApplication.model.Login;
import com.TechLearnApplication.model.UserRegistration;
import com.TechLearnApplication.repository.UserRegistrationRepository;

 

@RestController
public class LoginController {
    @Autowired
    private UserRegistrationRepository userRepository;
   
    @PostMapping("/login")                   // login validation api and accordingly allowing access
    private String log(@RequestBody Login login) 
    {
        List<UserRegistration> users = userRepository.findAll();
        boolean flag=false;
        for (UserRegistration user : users)
        {
            if (user.getPassword().equals(login.getPassword()) && user.getLoginId().equals(login.getUserId()))
            {
                flag=true;
                break;
            }
            
        }
        if(flag)             
			return "Login Successful welcome "+login.getUserId();
		else
			throw new TechLearnException("Login Unsuccessful, as password does not match with given "+login.getUserId());
	}
	@PutMapping("/updatePass")
    public String updateUser(@RequestBody Login login)
	{
        // update a single user
		UserRegistration user=userRepository.findByLoginId(login.getUserId());
		 if(user==null)         // when user  does not exist
		   {
			   throw new TechLearnException("Sorry! we can't update password as, loginId does not Exist ");
		   }
		 if (user.getPassword().equals(login.getOldPass()) && user.getLoginId().equals(login.getUserId())) 
		   { 
			   user.setOldPass(login.getOldPass());
			   user.setPassword(login.getPassword());
			   userRepository.save(user);
		  
	   
               return login.getUserId()+", your password has been successfully updated";
		   }
          
        	   throw new TechLearnException("Sorry! we can't update password as, "+login.getUserId()+", loginId does not match with password ");
		        // when password is wrong
		
     }

}