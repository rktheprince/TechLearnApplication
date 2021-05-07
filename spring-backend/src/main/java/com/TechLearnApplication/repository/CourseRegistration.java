package com.TechLearnApplication.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.TechLearnApplication.model.Courses;




public interface CourseRegistration extends CrudRepository<Courses,Long>  {
	
	 Courses findByCourseName(String courseName);
	 List<Courses> findAll();
	 List<Courses> findByInstructorId(String instructorId);
	 Optional<Courses> findByCourseId(Long courseId);
	 String deleteByCourseId(Long courseId);
}