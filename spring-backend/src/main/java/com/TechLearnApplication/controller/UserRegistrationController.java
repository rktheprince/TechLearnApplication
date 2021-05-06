package com.TechLearnApplication.controller;

import java.util.List;

import javax.persistence.Transient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TechLearnApplication.model.Courses;
import com.TechLearnApplication.model.Login;
import com.TechLearnApplication.model.StudentCoursesDetails;
import com.TechLearnApplication.model.UserRegistration;
import com.TechLearnApplication.model.UserRegistrationUI;
import com.TechLearnApplication.repository.CourseRegistration;
import com.TechLearnApplication.repository.StudentCoursesDetailsRepository;
import com.TechLearnApplication.repository.UserRegistrationRepository;
import com.TechLearnApplication.service.UserRegistrationService;
 
@RestController
@CrossOrigin(origins="http://localhost:3000")
public class UserRegistrationController {
	
		@Autowired
		UserRegistrationRepository repository;
		@Autowired
        CourseRegistration courseRepository;
        @Autowired
        StudentCoursesDetailsRepository studentRepository;
        @Autowired
        private UserRegistrationService userRegistrationService;
        
		@GetMapping("/createAdmin")
		public String createAdmin()
		{
			return userRegistrationService.addAdmin();
		}
		
		@PostMapping("/createUser")
		public String createUser(@RequestBody UserRegistrationUI userRegistration)
		{
			return userRegistrationService.addUser(userRegistration);
		}
		@GetMapping("/findall")
		public List<UserRegistrationUI> findAll()
		{
			return userRegistrationService.findAllUser();
		}
		
		@GetMapping("/search/{id}")
		public String search(@PathVariable String id)
		{
			return userRegistrationService.search(id);
		}
		
		@PutMapping("/update")
	    public String updateUser(@RequestBody UserRegistration user)
		{
			return userRegistrationService.updateUser(user);
	    }
	
	   
	    @DeleteMapping("/deleteall")
	    public String deleteAllUsers()
	    {
	    	return userRegistrationService.deleteAllUsers();
	    }
	   
	    @DeleteMapping("/delete/{user_id}")
	    public String deleteUser(@PathVariable long user_id)
	    {
	    	return userRegistrationService.deleteUser(user_id);
	    }
	   
		
		@RequestMapping("/searchbyfirstname/{firstname}")
		public List<UserRegistrationUI> fetchDataByLastName(@PathVariable String firstname)
		{
			return userRegistrationService.fetchDataByLastName(firstname);
		}
	
		@PostMapping("/adminAccess")
        public String adminAccess(@RequestBody Login login)
		{
			return userRegistrationService.adminAccess(login);
        }
       
        @GetMapping("/adminAccess/viewUsers")
        public List<UserRegistration> viewAllRegisteredUsers(@RequestBody Login login)
        {
        	return userRegistrationService.viewAllRegisteredUsers(login);
        }
        @GetMapping("/adminAccess/viewCourses")
        public List<Courses> viewAllAvailableCourses(Login login)
        {
        	return userRegistrationService.viewAllAvailableCourses(login);
        }
       
        @GetMapping("/adminAccess/viewStudentCourses")
        @Transient
        public List<StudentCoursesDetails> viewStudentCourseDetails(@RequestBody Login login)
        {
        	return userRegistrationService.viewStudentCourseDetails(login);
        }
        
        @DeleteMapping("/deleteUsers/{emailId}")
        public String deleteRegisteredUsers(@PathVariable("emailId") String emailId) 
        {
        	return userRegistrationService.deleteRegisteredUsers(emailId);
        }
        @DeleteMapping("/deleteCourse/{courseId}")
        public String deleteRegisteredCourses(@PathVariable("courseId") Long courseId) 
        {
        	return userRegistrationService.deleteRegisteredCourses(courseId);
        }
        
}
