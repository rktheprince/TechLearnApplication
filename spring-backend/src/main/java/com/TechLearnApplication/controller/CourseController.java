package com.TechLearnApplication.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.hibernate.annotations.common.util.impl.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.TechLearnApplication.model.Courses;
import com.TechLearnApplication.repository.CourseRegistration;
import com.TechLearnApplication.service.CourseService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public  class CourseController {
	
	//private final Logger log = LoggerFactory.getLogger(CourseController.class);
	@Autowired
	CourseService courseService;
	@Autowired
	CourseRegistration repository;
	@GetMapping("/courses")                  //for Creating courses table
    public String createCourse() {
        return courseService.createCourse();
    }
	
	@GetMapping("/allCourses")
	public List<Courses> viewAllAvailableCourses()
	{
		return courseService.viewAllAvailableCourses();
	}
	
	@PostMapping("/createcourse")           // for manual entry of course
	public String courseEntry(@RequestBody Courses courses)
	{
		return courseService.courseEntry(courses);
	}
	
	
	@GetMapping("/courses/{courseName}")     // for finding the available seats for particular course
    public String courseSeatsAvailable(@PathVariable String courseName)
	{
		return courseService.courseSeatsAvailable(courseName);
    }
	
	
	@GetMapping("/getCourseById/{courseId}")
	public Optional<Courses> getCourseById(@PathVariable Long courseId)
	{
		Optional<Courses>cour=repository.findById(courseId);
		return cour;
	}
	
//	@DeleteMapping("/deleteCourse/{courseId}")
//    public ResponseEntity<?> deleteGroup(@PathVariable Long courseId) {
//        //log.info("Request to delete group: {}",courseId);
//        repository.deleteById(courseId);
//        return ResponseEntity.ok().build();
//    }
	
}
