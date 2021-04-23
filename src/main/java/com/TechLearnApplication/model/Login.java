package com.TechLearnApplication.model;

public class Login {
    private String userId;
    private String password;
    private String courseName;
    private String oldPass;
    
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

	public Login()
    {
        
    }
    
    public Login(String userId, String password, String courseName,String oldPass) {
		super();
		this.userId = userId;
		this.password = password;
		this.courseName=courseName;
		this.oldPass=oldPass;
	}
    
}
 