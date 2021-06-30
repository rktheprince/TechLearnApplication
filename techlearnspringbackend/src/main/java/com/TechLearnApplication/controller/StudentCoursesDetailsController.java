package com.TechLearnApplication.controller;

import java.text.SimpleDateFormat;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.TechLearnApplication.model.Courses;
import com.TechLearnApplication.model.Login;
import com.TechLearnApplication.model.StudentCoursesDetails;
import com.TechLearnApplication.service.StudentCoursesDetailsService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class StudentCoursesDetailsController {

	 @Autowired
	 StudentCoursesDetailsService studentCoursesDetailsService;
	 
	 SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
	
	 @PostMapping("/createStudentCourse")
	 public String create(@RequestBody StudentCoursesDetails student)
	 {
		 return studentCoursesDetailsService.create(student);
	 }
	
	@PutMapping("/updateAttendance")
    public String updateAttendance(@RequestBody Login login)
	{
		return studentCoursesDetailsService.updateAttendance(login);
    }
	
	@PostMapping("/studentCoursesEnrolled")
    public List<StudentCoursesDetails> studentCoursesEnrolled(@RequestBody Courses course) 
	{  
		return studentCoursesDetailsService.studentCoursesEnrolled(course);	
	}
	   
    @PostMapping("/checkeligibity")
    public String checkEligibility(@RequestBody Login login)
    {
    	return studentCoursesDetailsService.checkEligibility(login);
	}
    
    @PutMapping("/updateAttendance2")
    public String updateAttendance2(@RequestBody Login login)
    {
    	return studentCoursesDetailsService.updateAttendance2(login);
    }
}
