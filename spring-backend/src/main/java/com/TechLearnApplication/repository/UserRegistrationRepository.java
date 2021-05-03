package com.TechLearnApplication.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;


import com.TechLearnApplication.model.UserRegistration;

public interface UserRegistrationRepository extends CrudRepository<UserRegistration, Long> {
	    List<UserRegistration> findByFirstName(String FirstName);
		List<UserRegistration> findAll();
		UserRegistration findByLoginId(String id);
		UserRegistration findByPhoneNo(String phoneNo);
		Optional<UserRegistration> findByEmailId(String emailId);
}
