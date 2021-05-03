package com.TechLearnApplication.repository;

import org.springframework.data.repository.CrudRepository;


import com.TechLearnApplication.model.StudentCoursesDetails;

import java.util.List;

public interface StudentCoursesDetailsRepository extends CrudRepository<StudentCoursesDetails,Long>{
	List<StudentCoursesDetails> findByLoginId(String id);
	StudentCoursesDetails findByCourseNameAndLoginId(String courseName,String loginId );
	StudentCoursesDetails findByCourseName(String courseName);
	List<StudentCoursesDetails> findAll();
	List<StudentCoursesDetails> findByCourseNameAndInstructorId(String courseName,String instructorId);
}
