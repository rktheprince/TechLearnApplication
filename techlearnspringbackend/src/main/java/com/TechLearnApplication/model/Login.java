package com.TechLearnApplication.model;

public class Login {
    private String userId;
    private String password;
    private String courseName;
    private String oldPass;
    private String phoneNo;
    
    public String getOldPass() {
		return oldPass;
	}

	public void setOldPass(String oldPass) {
		this.oldPass = oldPass;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public Login()
    {
        
    }
    
    public Login(String userId, String password, String courseName,String oldPass,String phoneNo) {
		super();
		this.userId = userId;
		this.password = password;
		this.courseName=courseName;
		this.oldPass=oldPass;
		this.phoneNo=phoneNo;
	}
    
}
 