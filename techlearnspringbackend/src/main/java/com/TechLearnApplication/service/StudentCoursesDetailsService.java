package com.TechLearnApplication.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PutMapping;

import com.TechLearnApplication.exception.TechLearnException;
import com.TechLearnApplication.model.Courses;
import com.TechLearnApplication.model.Login;
import com.TechLearnApplication.model.StudentCoursesDetails;
import com.TechLearnApplication.model.UserRegistration;
import com.TechLearnApplication.repository.CourseRegistration;
import com.TechLearnApplication.repository.StudentCoursesDetailsRepository;
import com.TechLearnApplication.repository.UserRegistrationRepository;

@Service
public class StudentCoursesDetailsService {
	
	@Autowired
	StudentCoursesDetailsRepository studentCoursesDetailsRepository;
	
	@Autowired
	UserRegistrationRepository userRepository;
	 
	@Autowired
	CourseRegistration courseRepository;
	 
	SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
	
	 
     public String create(StudentCoursesDetails student)
     {
   
        List<StudentCoursesDetails> stu=studentCoursesDetailsRepository.findAll();
        UserRegistration user=userRepository.findByPhoneNo(student.getPhoneNo());
        System.out.println(user.getAadhar());
        String username=user.getFirstName()+" "+user.getLastName();
        Courses course=courseRepository.findByCourseName(student.getCourseName());
        long id=course.getCourseId();
        int duration=course.getCourseDuration();
        String instructor=course.getInstructor();
        String instructorId=course.getInstructorId();
        double fee=course.getFees();
        if(student.getEmiCount()==1)
        {
             fee=fee*.95;
        }
        else if(student.getEmiCount()==2)
        {
            fee=fee*1.05;
        }
        else if(student.getEmiCount()==3)
        {
            fee=fee*1.10;
        }
        else
        {
            fee=fee*1.5;
        }
        String loginId=user.getLoginId();
        Date date=new Date();
        String str=formatter.format(date);
        int cap=course.getCapacity();
        if (cap==0)
        {
        	return "This Batch is full Please wait for another batch";
           // throw new TechLearnException( "This Batch is full Please wait for another batch");
        }
        boolean flag=false;
        for(StudentCoursesDetails ss : stu)
        {
            if(ss.getPhoneNo().equals(student.getPhoneNo())&&ss.getCourseName().equals(student.getCourseName()))
            {
                flag=true;
            }
        }
        if(flag)
        {
        	return  "You are Already Registered for this course";
            //throw new TechLearnException( "You are Already Registered for this course");
        }
        else
        {
            studentCoursesDetailsRepository.save(new StudentCoursesDetails(id,student.getCourseName(),student.getPhoneNo(),username,student.getEmiCount(),duration,instructor,fee,0,loginId,str,str,instructorId));
            course.setCapacity(cap-1);
            courseRepository.save(course);
            
        }
        return "Student Details succesfully entered is created";
    }
	
   //updating attendance to check eligibility
    public String updateAttendance(Login login)
 	{
    	java.util.Date date=new java.util.Date();  
        
        UserRegistration user=userRepository.findByLoginId(login.getUserId());
        StudentCoursesDetails std=studentCoursesDetailsRepository.findByCourseNameAndLoginId(login.getCourseName(),login.getUserId());
        if (user.getPassword().equals(login.getPassword()) && user.getLoginId().equals(login.getUserId()))
        {
         	
            if(std.getCourseName().equals(login.getCourseName()))
            {
            	if(std.getCounter()<std.getDuration())
             	{
            		std.setCounter(std.getCounter()+1);
            		studentCoursesDetailsRepository.save(std);
                }
                else 
                {
                	return "Your attendence is full for the course";
                	//throw new TechLearnException("Your attendence is full for the course");
                }
             	//to here
             }
             return login.getUserId()+"....Your Attendance has been successfully Updated for "+date;//move from here
        }
        return login.getUserId()+", loginId does not match with password";
        //throw new TechLearnException( login.getUserId()+", loginId does not match with password");
    }
 	
    //student Courses Enrolled
    /// profilepage api
    public List<StudentCoursesDetails> studentCoursesEnrolled(Courses course) 
    {  
    	List<StudentCoursesDetails> studentList=studentCoursesDetailsRepository.findByCourseNameAndInstructorId(course.getCourseName(),course.getInstructorId());
    	List<StudentCoursesDetails> viewUser = new ArrayList<>();
    	if(studentList==null) 
    	{
    		throw new TechLearnException ("Students for this instructor not found");   //students for this particular course and instructor not found
    	}
    	else
    	{
    		for(StudentCoursesDetails item: studentList) 
         	{
    			viewUser.add(item);
         	}
    		return viewUser;
    	}
    }
 	
 	//checking eligibilty for the test
    public String checkEligibility(Login login)
    {
	       StudentCoursesDetails std=studentCoursesDetailsRepository.findByCourseNameAndLoginId(login.getCourseName(),login.getUserId());
	       int percentage=((std.getCounter()*100)/std.getDuration());
	       if(percentage<60)
	    	   return "You are not eligible to take the Exam";
	        	//throw new TechLearnException ("You are not eligible to take the Exam");
	       else
	            return "You are eligible to take the Exam";
	}
    
    //update attendance main
    @PutMapping("/updateAttendance2")
    public String updateAttendance2(Login login)
    {
    	Date date=new Date();
    	String strDate= formatter.format(date);
    	//updating attendance
    	UserRegistration user=userRepository.findByLoginId(login.getUserId());
    	StudentCoursesDetails std=studentCoursesDetailsRepository.findByCourseNameAndLoginId(login.getCourseName(),login.getUserId());
    	if (user.getPassword().equals(login.getPassword()) && user.getLoginId().equals(login.getUserId())&&std.getCourseName().equals(login.getCourseName()))
    	{
    		if(std.getAttendanceDueDate().equals(strDate))
    		{
    			if(std.getCounter()<std.getDuration()) 
    			{
    				std.setCounter(std.getCounter()+1);
    				Date dt = new Date();
    				Calendar c = Calendar.getInstance();
    				c.setTime(dt);
    				c.add(Calendar.DATE, 1);
    				dt = c.getTime();
	                std.setAttendanceDueDate(formatter.format(dt));
	                studentCoursesDetailsRepository.save(std);
	                return login.getUserId()+"....Your Attendance has been successfully Updated for "+date;
    			}
	            else 
	            {
	            	return "Your attendence is full for the course";
	            	//throw new TechLearnException("Your attendence is full for the course");     // full attendence already acquired
	            }
    		}
    		else 
    		{
    			return login.getUserId() + "....Attendance already updated for"+date;
    			//throw new TechLearnException( login.getUserId() + "....Attendance already updated for"+date);  //attendance already registered for the day
    		}
    	}
    	else 
    	{
    		return "Enter correct User id and Password to update attendance";
    		//throw new TechLearnException( "Enter correct User id and Password to update attendance"); // access denied wrong id and password
    	}
    }
}

