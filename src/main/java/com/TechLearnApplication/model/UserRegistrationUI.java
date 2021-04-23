package com.TechLearnApplication.model;
// class for object creation of UserRegistration class
public class UserRegistrationUI  {
	private String lastName; 
	private String firstName;
	private String emailId;
	private String phoneNo;
	private String address;
	private String aadhar;
	private String gender;
	private String password;
	private String loginId;
	private String dateOfBirth;
	private String oldPass;
	
	public String getOldPass() {
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
	
	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
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
    protected UserRegistrationUI() {
  	}
   
  	public UserRegistrationUI(String firstName, String lastName, String emailId,String phoneNo,String address,String aadhar,String gender, String dateOfBirth,  String password,String loginId,String oldPass) {
  		this.firstName = firstName;
  		this.lastName = lastName;
  		this.emailId=emailId;
  		this.phoneNo=phoneNo;
  		this.address=address;
  		this.aadhar=aadhar;
  		this.gender=gender;
  		this.password=password;
  		this.loginId=loginId;
  		this.dateOfBirth=dateOfBirth;
  		this.oldPass=oldPass;
  	}
   
  	
  	@Override
  	public String toString() {
  		return "UserRegistrationUI [lastName=" + lastName + ", firstName=" + firstName + ", emailId=" + emailId
  				+ ", phoneNo=" + phoneNo + ", address=" + address + ", aadhar=" + aadhar + ", gender=" + gender
  				+ ", password=" + password + ", loginId=" + loginId + ", dateOfBirth=" + dateOfBirth + ", oldPass="
  				+ oldPass + "]";
  	}
}
