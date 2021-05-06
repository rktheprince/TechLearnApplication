package com.TechLearnApplication.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="StudentDetails")
public class StudentCoursesDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="serialNo")
	private int serialNo;
	
	private long courseId;
	@Column(name="courseName")
	private String courseName;
	@Column(name="instructorId")
	private String instructorId;
	@Column(name="phoneNo")
	private String phoneNo;
	@Column(name="name")
	private String name;
	@Column(name="emiCount")
	private int emiCount;
	@Column(name="duration")
	private int duration;
	@Column(name="instructor")
	private String instructor;
	@Column(name="Fee")
	private double fee;
	@Column(name="loginId")
	private String loginId;
	@Column(name="Attendence")
	private int counter;
	@Column(name="Attendance_due_date")
    private String attendanceDueDate;
    @Column(name="Enrollment_date")
    private String enrollmentDate;
    @OneToOne
    @Transient
    private Courses course;
    public int getSerialNo() {
		return serialNo;
	}
	public void setSerialNo(int serialNo) {
		this.serialNo = serialNo;
	}
    public String getInstructorId() {
		return instructorId;
	}
	public void setInstructorId(String instructorId) {
		this.instructorId = instructorId;
	}
	public String getAttendanceDueDate() {
		return attendanceDueDate;
	}
	public void setAttendanceDueDate(String attendanceDueDate) {
		this.attendanceDueDate = attendanceDueDate;
	}
	public String getEnrollmentDate() {
		return enrollmentDate;
	}
	public void setEnrollmentDate(String enrollmentDate) {
		this.enrollmentDate = enrollmentDate;
	}
	public String getLoginId() {
		return loginId;
	}
	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}
	public int getCounter() {
		return counter;
	}
	public void setCounter(int counter) {
		this.counter = counter;
	}
	public long getCourseId() {
		return courseId;
	}
	public void setCourseId(long courseId) {
		this.courseId = courseId;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getEmiCount() {
		return emiCount;
	}
	public void setEmiCount(int emiCount) {
		this.emiCount = emiCount;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
	public String getInstructor() {
		return instructor;
	}
	public void setInstructor(String instructor) {
		this.instructor = instructor;
	}
	public double getFee() {
		return fee;
	}
	public void setFee(double fee) {
		this.fee = fee;
	}
	public StudentCoursesDetails(long courseId, String courseName, String phoneNo, String name, int emiCount,
			int duration, String instructor, double fee,int counter,String loginId,String attendanceDueDate, String enrollmentDate, String instructorId) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
		this.phoneNo = phoneNo;
		this.name = name;
		this.emiCount = emiCount;
		this.duration = duration;
		this.instructor = instructor;
		this.fee = fee;
		this.counter=counter;
		this.loginId=loginId;
		this.attendanceDueDate=attendanceDueDate;
		this.enrollmentDate=enrollmentDate;
		this.instructorId=instructorId;
	}
	public StudentCoursesDetails() {

	}
	@Override
	public String toString() {
		return "StudentCoursesDetails [serialNo=" + serialNo + ", courseId=" + courseId + ", courseName=" + courseName
				+ ", instructorId=" + instructorId + ", phoneNo=" + phoneNo + ", name=" + name + ", emiCount="
				+ emiCount + ", duration=" + duration + ", instructor=" + instructor + ", fee=" + fee + ", loginId="
				+ loginId + ", counter=" + counter + ", attendanceDueDate=" + attendanceDueDate + ", enrollmentDate="
				+ enrollmentDate + ", course=" + course + "]";
	}

	
	
}
