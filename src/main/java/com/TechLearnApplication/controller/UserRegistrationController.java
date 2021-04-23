package com.TechLearnApplication.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.Transient;

import com.TechLearnApplication.exception.TechLearnException;
import com.TechLearnApplication.model.Courses;
import com.TechLearnApplication.model.Login;
import com.TechLearnApplication.model.StudentCoursesDetails;
import com.TechLearnApplication.model.UserRegistration;
import com.TechLearnApplication.model.UserRegistrationUI;
import com.TechLearnApplication.repository.CourseRegistration;
import com.TechLearnApplication.repository.StudentCoursesDetailsRepository;
import com.TechLearnApplication.repository.UserRegistrationRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
 
@RestController
public class UserRegistrationController {
	
	 
	

		@Autowired
		UserRegistrationRepository repository;
		@Autowired
        CourseRegistration courseRepository;
       
        @Autowired
        StudentCoursesDetailsRepository studentRepository;
		
		@GetMapping("/createAdmin")
		public String bulkcreate()
		{
			// save a single Customer
			UserRegistration user23=repository.findByPhoneNo("8956235256");
			if(user23==null)
			{
		       repository.save(new UserRegistration("Admin", "Bhojwani", "rajesh@gmail.com", "8956235256", "19 shubhash nagar bareilly", "564695","M","20-01-1998","mohiu5656","user56","mohiu5656"));
			   return "Admin Registered";
			}
			else 
			{
				throw new TechLearnException("Admin already exist......!!!");
			}
		}
		
		@PostMapping("/createUser")
		public String create(@RequestBody UserRegistrationUI userRegistration)
		{

			String fname=userRegistration.getFirstName(); //getfName
			String lname=userRegistration.getLastName(); //getlname
			String mob=userRegistration.getPhoneNo(); //getphone
			String pass1=fname.substring(fname.length()-1);
			String pass2 = lname.substring(1,2);
			String pass3 = mob.substring(mob.length()-4);
			String password1=pass1.concat(pass2);
			String password2=password1.concat(pass3);
			
			int sum=0;
			
			String date=userRegistration.getDateOfBirth();
			/*
			 * 
			 * 31-10-1997
			 * Taranjeet
			 * 
			 * 1997
			 * 1+9+9+7=26=2+6=8
			 * 
			 * Taranjeet831
			 * 
			 * } }
			 */
			
			String[] dateParts=date.split("-");
			String year=dateParts[2];
			char ch[]=year.toCharArray();
			for(int j=0;j<ch.length;j++)
			{
				sum +=(ch[j]-'0');
			}
			
			int temp=sum;
		    int rem=0;
		    while (temp > 0 || rem > 9)
		    {
		       if (temp == 0)
		       {
		         temp = rem;
		         rem = 0;
		       }
		            rem += temp % 10;
		            temp /= 10; 
		    }
			
			String userid=userRegistration.getFirstName()+rem+dateParts[0];
			UserRegistration user23=repository.findByPhoneNo(userRegistration.getPhoneNo());
			
            if(user23==null) 
			{
			   repository.save(new UserRegistration(userRegistration.getFirstName(), userRegistration.getLastName(),userRegistration.getEmailId(),userRegistration.getPhoneNo(),userRegistration.getAddress(),userRegistration.getAadhar(),userRegistration.getGender(),userRegistration.getDateOfBirth(),password2,userid,password2));
               return "User is Registered \n"+"Use "+userid+" as your userid and "+password2+" as your password for first login and then update your password immediately";
			}
			else
			{
			   throw new TechLearnException("user already exist......!!!");
			}
		}
		@GetMapping("/findall")
		public List<UserRegistrationUI> findAll()
		{

			List<UserRegistration> users = repository.findAll();
			List<UserRegistrationUI> userRegistrationUI = new ArrayList<>();
			for (UserRegistration user : users) 
			{
				userRegistrationUI.add(new UserRegistrationUI(user.getFirstName(),user.getLastName(), user.getEmailId(), user.getPhoneNo(),user.getAddress(),user.getAadhar(),user.getGender(),user.getDateOfBirth(), user.getPassword(),user.getLoginId(),user.getOldPass()));
			}

			return userRegistrationUI;
		}
		
		@GetMapping("/search/{id}")
		public String search(@PathVariable String id)
		{
			String user = "";
			user = repository.findByLoginId(id).toString();
			return user;
		}
		
		@PutMapping("/update")
	    public String updateUser(@RequestBody UserRegistration user)
		{
	        // update a single user
	        repository.save(user);
	        return "user is updated";
	    }
	
	   
	    @DeleteMapping("/deleteall")
	    public String deleteAllUsers()
	    {
	        // delete all users
	        repository.deleteAll();
	        return "users are Deleted";
	    }
	   
	    @DeleteMapping("/delete/{user_id}")
	    public String deleteUser(@PathVariable long user_id)
	    {
	        // delete a single user
	        repository.deleteById(user_id);
	        return "user is Deleted";
	    }
	   
		
		@RequestMapping("/searchbyfirstname/{firstname}")
		public List<UserRegistrationUI> fetchDataByLastName(@PathVariable String firstname)
		{
		
		   List<UserRegistration> users = repository.findByFirstName(firstname);
		   List<UserRegistrationUI> userRegistrationUI = new ArrayList<>();
			
			for (UserRegistration user : users) 
			{
				userRegistrationUI.add(new UserRegistrationUI(user.getFirstName(),user.getLastName(), user.getEmailId(), user.getPhoneNo(),user.getAddress(),user.getAadhar(),user.getGender(),user.getDateOfBirth(),user.getPassword(),user.getLoginId(),user.getOldPass()));
			}

			return userRegistrationUI;
		}
	
		@PostMapping("/adminAccess")
        public String adminAccess(@RequestBody Login login)
		{
            boolean flag=false;
            List<UserRegistration> users = repository.findAll();
            for(UserRegistration user : users) 
            {
                if (user.getFirstName().equals("Admin") && user.getPassword().equals(login.getPassword()) && user.getLoginId().equals(login.getUserId()))
                 {
                   flag=true;
                   break;
                 }
            }
            if(flag) 
              {
                  return "Admin can now access all to details";
              }
            else
              {
            	  throw new TechLearnException( "Access Denied");
              }
        }
       
        @GetMapping("/adminAccess/viewUsers")
        public List<UserRegistration> viewAllRegisteredUsers(@RequestBody Login login)
        {
            List<UserRegistration> users = repository.findAll();
            List<UserRegistration> viewUser = new ArrayList<>();
           
            for(UserRegistration user : users)
            {
                  if(!(user.getFirstName().equalsIgnoreCase("Admin")))
                  {
                      viewUser.add(user);
                  }
            }
               
            return viewUser;
        }
        @GetMapping("/adminAccess/viewCourses")
        public List<Courses> viewAllAvailableCourses(@RequestBody Login login)
        {
           
            List<Courses> courses = courseRepository.findAll();
            List<Courses> viewCourses = new ArrayList<>();
            for(Courses course : courses)
            {
                 
                      viewCourses.add(course);     
            }           
            return viewCourses;
           
        }
       
        @GetMapping("/adminAccess/viewStudentCourses")
        @Transient
        public List<StudentCoursesDetails> viewStudentCourseDetails(@RequestBody Login login)
        {
            List<StudentCoursesDetails> studentDetails= studentRepository.findAll();
            List<StudentCoursesDetails> viewStudentCourses = new ArrayList<>();
            for(StudentCoursesDetails std : studentDetails)
            {
                 
                      viewStudentCourses.add(std);     
             }           
             return viewStudentCourses;
        }
        
        @DeleteMapping("/deleteUsers/{emailId}")
        public String deleteRegisteredUsers(@PathVariable("emailId") String emailId) 
        {
            Optional<UserRegistration> user = repository.findByEmailId(emailId);
            if(user.isPresent()) {
                repository.delete(user.get());
                return "user is deleted";
            }
            else 
            {
                return "Not found";
            }
        }
        @DeleteMapping("/deleteCourse/{courseId}")
        public String deleteRegisteredCourses(@PathVariable("courseId") Long courseId) 
        {
            Optional<Courses> course = courseRepository.findByCourseId(courseId);
            if(course.isPresent())
            {
                courseRepository.delete(course.get());
                return "Course is Deleted";
            }
            else
            {
                throw new TechLearnException( "Course Not found");
            }
        }
        
        
}
