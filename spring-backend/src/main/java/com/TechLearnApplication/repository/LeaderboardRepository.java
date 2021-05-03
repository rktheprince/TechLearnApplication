package com.TechLearnApplication.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.TechLearnApplication.model.Leaderboard;



public interface LeaderboardRepository extends CrudRepository<Leaderboard,Long> {
  List<Leaderboard> findAll();
	
}
