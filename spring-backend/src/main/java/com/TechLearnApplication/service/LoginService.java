package com.TechLearnApplication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TechLearnApplication.exception.TechLearnException;
import com.TechLearnApplication.model.Login;
import com.TechLearnApplication.model.UserRegistration;
import com.TechLearnApplication.repository.UserRegistrationRepository;

@Service
public class LoginService {
	@Autowired
    private UserRegistrationRepository userRepository;
	
	// login validation api and accordingly allowing access
	public String log(Login login) 
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
			//return "Login UnSuccessful As Wrong Credentials";
			throw new TechLearnException("Login Unsuccessful, as password does not match with given "+login.getUserId());
	}
	
	// update a single user
	public String updateUser(Login login)
	{
        // update a single user
		UserRegistration user=userRepository.findByLoginId(login.getUserId());
		 if(user==null)         // when user  does not exist
		   {
			   return "Sorry! we can't update password as, loginId does not Exist ";
			 //throw new TechLearnException("Sorry! we can't update password as, loginId does not Exist ");
		   }
		 if (user.getPassword().equals(login.getOldPass()) && user.getLoginId().equals(login.getUserId())) 
		   { 
			   user.setOldPass(login.getOldPass());
			   user.setPassword(login.getPassword());
			   userRepository.save(user);
		  
	   
               return login.getUserId()+", your password has been successfully updated";
		   }
               return "Sorry! we can't update password as, "+login.getUserId()+", loginId does not match with password ";
        	  // throw new TechLearnException("Sorry! we can't update password as, "+login.getUserId()+", loginId does not match with password ");
		        // when password is wrong
		
     }
	public String ForgetPass(Login login)
	{
        // update a single user
		UserRegistration user=userRepository.findByLoginIdAndPhoneNo(login.getUserId(),login.getPhoneNo());
		 if(user==null)         // when user  does not exist
		   {
			   return "Sorry! we can't update password as Credentials does not match ";
			 //throw new TechLearnException("Sorry! we can't update password as, loginId does not Exist ");
		   }
		 else {
	           user.setOldPass(user.getPassword());
			   user.setPassword(login.getPassword());
			   userRepository.save(user);
		  
	   
               return login.getUserId()+", your password has been successfully updated";
		 }
		  
		
     }
}
