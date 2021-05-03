package com.TechLearnApplication.controller;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.TechLearnApplication.exception.TechLearnException;
import com.TechLearnApplication.model.Courses;
import com.TechLearnApplication.repository.CourseRegistration;

@RestController
public  class CourseController {
	
	@Autowired
	CourseRegistration repository;
	
	@GetMapping("/courses")                  //for Creating courses table
    public String createCourse() {
        repository.saveAll(Arrays.asList(new Courses(101L, "Machine Learning", 10, "Sayan",10000,"Sayani25",5),
                new Courses(102L, "Internet Of Things", 10, "Mohit",20000,"Mohini89",6),
                new Courses(103L, "Java Learning", 5 , "Taranjeet",9000,"Taran5656",1),
                new Courses(104L, "Python", 10, "Rohit",11000,"Rohini36",5),
                new Courses(105L, "Cloud Computing", 10, "Piyush",9500,"Princi89",5),
                new Courses(106L, "SQL Database", 5, "Divyansh",8900,"Divya56",2),
                new Courses(107L, "Advance php", 8, "Soumik",12000,"Saumaya36",8)));
        return "Courses are Registered";
    }
	
	@PostMapping("/createcourse")           // for manual entry of course
	public String courseEntry(@RequestBody Courses courses){
		// save a single Customer
		repository.save(new Courses(courses.getCourseId(),courses.getCourseName(),courses.getCourseDuration(),courses.getInstructor(),courses.getFees(),courses.getInstructorId(),courses.getCapacity()));

		return "Course is Registered";
	}
	
	
	@GetMapping("/courses/{courseName}")     // for finding the available seats for particular course
    public String courseSeatsAvailable(@PathVariable String courseName)
	{
    
        Courses course = repository.findByCourseName(courseName);
        System.out.println(course);
            if(course.getCapacity()==0)
            {
            	throw new TechLearnException ("Wait for next Batch");
            }
            else {
                   return "Available Seat "+course.getCapacity();
            }
    }
	
	
	
	
	

}
