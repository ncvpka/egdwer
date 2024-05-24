package com.vti.traveloka.request;
public class RegistModel {

    private String userName;

    private String passWord;

    public RegistModel(String userName, String passWord) {
        this.userName = userName;
        this.passWord = passWord;
    }

    public RegistModel() {
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }
}
