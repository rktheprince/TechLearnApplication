package com.TechLearnApplication.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TechLearnApplication.exception.TechLearnException;
import com.TechLearnApplication.model.Courses;
import com.TechLearnApplication.repository.CourseRegistration;

@Service
public class CourseService {
	@Autowired
	CourseRegistration repository;
	
	//for Creating courses table
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
	
	//view all courses
	public List<Courses> viewAllAvailableCourses()
	{
      
       List<Courses> courses = repository.findAll();
       List<Courses> viewCourses = new ArrayList<>();
       for(Courses course : courses)
       {
            
              viewCourses.add(course);     
       }           
       return viewCourses;
      
	}
	
	// for manual entry of course
		public String courseEntry(Courses courses){
			// save a single Customer
			repository.save(new Courses(courses.getCourseId(),courses.getCourseName(),courses.getCourseDuration(),courses.getInstructor(),courses.getFees(),courses.getInstructorId(),courses.getCapacity()));

			return "Course is Registered";
		}
	
	// for finding the available seats for particular course
    public String courseSeatsAvailable(String courseName)
	{
    	Courses course = repository.findByCourseName(courseName);
    	System.out.println(course);
    		if(course.getCapacity()==0)
    		{
	          	//throw new TechLearnException ("Wait for next Batch");
    			return "Wait for next Batch";
    		}
	        else {
	        	return "Available Seat "+course.getCapacity();
	        }
	}
    
   
}
