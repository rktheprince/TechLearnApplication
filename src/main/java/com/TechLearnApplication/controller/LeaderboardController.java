package com.TechLearnApplication.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.TechLearnApplication.exception.TechLearnException;
import com.TechLearnApplication.model.Leaderboard;
import com.TechLearnApplication.model.StudentCoursesDetails;
import com.TechLearnApplication.repository.LeaderboardRepository;
import com.TechLearnApplication.repository.StudentCoursesDetailsRepository;

@RestController
public class LeaderboardController {
	
	@Autowired
	StudentCoursesDetailsRepository studentCoursesDetailsRepository;
	
	@Autowired
	LeaderboardRepository leaderboardrepository;
	 
	@PostMapping("/createLeaderboard")          // for creating leaderboard
	public String create(@RequestBody Leaderboard leaderBoard)
	{
		 
		 StudentCoursesDetails std=studentCoursesDetailsRepository.findByCourseNameAndLoginId(leaderBoard.getCoursename(),leaderBoard.getUserid());
		 if(std==null)                  // if user is not in database
			 throw new TechLearnException("This user is not registered in " + leaderBoard.getCoursename());
		 String userName=std.getName();
		 String certification="";
		 int points=0;
		 
		 int percentage=((std.getCounter()*100)/std.getDuration());
		 if(percentage<60)            // if attendance is short for giving exam
			 throw new TechLearnException("This user have not given any exam due to low attendance !! ");
	        
		 if(percentage>=60 && percentage <80)
	        	points+=12;
		 
	     else if(percentage >= 80 && percentage <90)
	            points+=18;
	     else if(percentage >90 && percentage <=100)
	        	points+=30;   //maximum 15 marks from attendance

	        
	     int marks=leaderBoard.getMarks();
	        
	     if(marks>=60 && marks <80)
	        	points+=130;
	     else if(marks >= 80 && marks <90)
	            points+=150;
	     else if(marks >90 && marks <=100)
	        	points+=170;   //maximum 85 marks from result
	     else
	    	 points+=((marks)*2);
	     
	     int totalScore=points/2;
	     
	     if(totalScore>=60)
	    	 certification+="Yes";
	     else 
	    	 certification+="No";
	     
	     char grade;
	     if(totalScore>=60 && totalScore<70)
	    	 grade='D';
	     else if(totalScore>=70 && totalScore<80)
	    	 grade='C';
	     else if(totalScore>=80 && totalScore<90)
	    	 grade='B';
	     else if(totalScore>=90 && totalScore<=100)
	    	 grade='A';
	     else
	    	 grade='E'; //Fail
	     
	     leaderboardrepository.save(new Leaderboard(leaderBoard.getUserid(),userName,leaderBoard.getCoursename(),leaderBoard.getMarks(),certification,grade));
	     
	        
		 return "Result updated";
	 }
	 @GetMapping("/viewLeaderboard")
	    public List<Leaderboard> findAll()
	    {    
	        List<Leaderboard> users = leaderboardrepository.findAll();
	        List<Leaderboard> lb = new ArrayList<>();
	        for (Leaderboard user : users) 
	        {
	            lb.add(new Leaderboard(user.getUserid(),user.getUsername(), user.getCoursename(), user.getMarks(),user.getCertification(),user.getGrading()));
	        }

	 

	        return lb;
	    }

}
