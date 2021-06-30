package com.TechLearnApplication.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Leaderboard")
public class Leaderboard {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="serialNo")
	private int serialNo;
	private String userid;
	private String username;
	private String coursename;
	private int marks;
	private String certification;
	private char grading;
	public int getSerialNo() {
		return serialNo;
	}
	public void setSerialNo(int serialNo) {
		this.serialNo = serialNo;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getCoursename() {
		return coursename;
	}
	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}
	public int getMarks() {
		return marks;
	}
	public void setMarks(int marks) {
		this.marks = marks;
	}
	public String getCertification() {
		return certification;
	}
	public void setCertification(String certification) {
		this.certification = certification;
	}
	public char getGrading() {
		return grading;
	}
	public void setGrading(char grading) {
		this.grading = grading;
	}
	public Leaderboard(String userid, String username, String coursename, int marks, String certification,
			char grading) {
		super();
		this.userid = userid;
		this.username = username;
		this.coursename = coursename;
		this.marks = marks;
		this.certification = certification;
		this.grading = grading;
	}
	public Leaderboard() {
		super();
	}
	@Override
	public String toString() {
		return "Leaderboard [userid=" + userid + ", username=" + username + ", coursename="
				+ coursename + ", marks=" + marks + ", certification=" + certification + ", grading=" + grading + "]";
	}
	
}