package com.TechLearnApplication.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Courses")
public class Courses 
{
	@Id
	private Long courseId;
	@Column(name = "courseName")
	private String courseName;	
	private int courseDuration;
	private String instructor;
	private double fees;
	private String instructorId;
	private int capacity;
	public Courses(Long courseId,String courseName, int courseDuration, String instructor , double fees,String instructorId,int capacity) 
	{
		this.courseId=courseId;
		this.courseName = courseName;
		this.courseDuration = courseDuration;
		this.instructor = instructor;
		this.fees=fees;
		this.capacity=capacity;
		this.instructorId=instructorId;
	}
	public Courses() {

	}
	public int getCapacity() {
		return capacity;
	}
    public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
    public String getInstructorId()
	{
		return instructorId;
	}
    public void setInstructorId(String instructorId)
	{
		this.instructorId = instructorId;
	}
    public Long getCourseId() {
		return courseId;
	}
    public void setCourseId(Long courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public int getCourseDuration() {
		return courseDuration;
	}

	public void setCourseDuration(int courseDuration) {
		this.courseDuration = courseDuration;
	}

	public double getFees() {
		return fees;
	}

	public void setFees(double fees) {
		this.fees = fees;
	}

	public String getInstructor() {
		return instructor;
	}

	public void setInstructor(String instructor) {
		this.instructor = instructor;
	}
	@Override
	public String toString() {
		return "Courses [courseId=" + courseId + ", courseName=" + courseName + ", courseDuration=" + courseDuration
				+ ", instructor=" + instructor + ", fees=" + fees + ", instructorId=" + instructorId + ", capacity="
				+ capacity + "]";
	}
	
	
	

}