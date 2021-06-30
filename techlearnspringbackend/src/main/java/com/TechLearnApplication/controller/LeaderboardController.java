package com.TechLearnApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.TechLearnApplication.model.Leaderboard;
import com.TechLearnApplication.service.LeaderboardService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class LeaderboardController {
	
	@Autowired
	LeaderboardService leaderboardService;
	 
	@PostMapping("/createLeaderboard")          // for creating leaderboard
	public String create(@RequestBody Leaderboard leaderBoard)
	{
		 return leaderboardService.create(leaderBoard);
	 }
	
	 @GetMapping("/viewLeaderboard")
	 public List<Leaderboard> findAll()
	 {    
		 return leaderboardService.findAll();
	 }
}
