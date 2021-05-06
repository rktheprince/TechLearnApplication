package com.TechLearnApplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.TechLearnApplication.model.Login;
import com.TechLearnApplication.service.LoginService;

 

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class LoginController {
    @Autowired
    private LoginService loginService;
    @CrossOrigin
    
    
	/*@GetMapping("/getThisEmp/{eid}")
	public ResponseEntity<Employee> getThisEmp(@PathVariable("eid") int eid) {
		Employee emp = employeeService.getEmployeeById(eid);
		if (emp == null)
			throw new EmployeeNotfoundException();
		return new ResponseEntity<>(emp, HttpStatus.OK);
	}*/
    
    @PostMapping("/login")                   
    public String log(@RequestBody Login login) //responseBody
    {
        return loginService.log(login);
	}
    
	@PutMapping("/updatePass")
    public String updateUser(@RequestBody Login login)
	{
		return loginService.updateUser(login);
     }
	
	@PutMapping("/forgetPass")
    public String ForgetPass(@RequestBody Login login)
	{
		return loginService.ForgetPass(login);
     }

}