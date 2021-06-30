package com.TechLearnApplication.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity                                                                           //To make this class as a Table
@Table(name = "UserRegistration")                                                 // Giving table name as UserRegistartion 
public class UserRegistration implements Serializable {
	
	private static final long serialVersionUID = -2343243243242432341L;           //serialVersionUID attributes of different classes are independent
	@Id                                                                           // To specify primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)                           // To autogenerate user_id
	private long user_id;                                                         // different variables declaration
    @Column(name = "firstname")
	private String firstName;
	@Column(name = "Password")
	private String password;
	@Column(name = "LoginId")
	private String loginId;
	@Column(name = "address")
	private String address;
	@Column(name = "aadhar")
	private String aadhar;
	@Column(name = "gender")
	private String gender;
	@Column(name = "lastname")
	private String lastName;
	@Column(name = "emailid")
	private String emailId;
	@Column(name = "phoneno")
	private String phoneNo;
    @Column(name = "DateOfBirth")
	private String dateOfBirth;
	@Column(name="OldPassword")
	private String oldPass;
 
	public String getOldPass() {                                                 //Getter and Setter of the Variables
		return oldPass;
	}

	public void setOldPass(String oldPass) {
		this.oldPass = oldPass;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	public long getUser_id() {
		return user_id;
	}

	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getAadhar() {
		return aadhar;
	}

	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

 
	public UserRegistration() {                                         //Default constructor
	}
    
	public UserRegistration(String firstName, String lastName, String emailId,String phoneNo,String address,String aadhar, String gender,String dateOfBirth,String password,String loginId,String oldPass) {
		this.firstName = firstName;
		this.lastName = lastName;                                      //Parameterised constructor
		this.emailId=emailId;
		this.phoneNo=phoneNo;
		this.address=address;
		this.aadhar=aadhar;
		this.gender=gender;
		this.dateOfBirth=dateOfBirth;
		this.password=password;
		this.loginId=loginId;
		this.oldPass=oldPass;
	}
 
	
	@Override                                                         // overriding toString
	public String toString() {
		return "UserRegistration [user_id=" + user_id + ", firstName=" + firstName + ", password=" + password
				+ ", loginId=" + loginId + ", address=" + address + ", aadhar=" + aadhar + ", gender=" + gender
				+ ", emailId=" + emailId + ", phoneNo=" + phoneNo + ", dateOfBirth=" + dateOfBirth + ", oldPass="
				+ oldPass + ", lastName=" + lastName + "]";
	}
}