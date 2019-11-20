package com.ocean.org.domain;


public class users {

    Integer id;
    String username;
    String password;
    String sex;
    String age;
    String company;
    String education;
    String department;
    String address;
    String position;
    String finterest;
    String sinterest;
    String tinterest;
    String addtime;
    String state;
    String nickname;
    String role;
    String favoriteCat1;
    String favoriteCat2;
    String favoriteCat3;
    String userProfession;

    public users(String username, String sex, String age, String address, String nickname, String favoriteCat1, String favoriteCat2, String favoriteCat3, String userProfession) {
        this.username = username;
        this.sex = sex;
        this.age = age;
        this.address = address;
        this.nickname = nickname;
        this.favoriteCat1 = favoriteCat1;
        this.favoriteCat2 = favoriteCat2;
        this.favoriteCat3 = favoriteCat3;
        this.userProfession = userProfession;
    }



    public users(Integer id, String username, String nickname, String favoriteCat1, String favoriteCat2, String favoriteCat3, String userProfession) {
        this.id = id;
        this.username = username;
        this.nickname = nickname;
        this.favoriteCat1 = favoriteCat1;
        this.favoriteCat2 = favoriteCat2;
        this.favoriteCat3 = favoriteCat3;
        this.userProfession = userProfession;
    }

    public String getUserProfession() {
        return userProfession;
    }

    public  boolean getIfOldUser(){ return true;}

    public void setIfOldUser(boolean x){}

    public void setUserProfession(String userProfession) {
        this.userProfession = userProfession;
    }

    public String getFavoriteCat1() {
        return favoriteCat1;
    }

    public void setFavoriteCat1(String favoriteCat1) {
        this.favoriteCat1 = favoriteCat1;
    }

    public String getFavoriteCat2() {
        return favoriteCat2;
    }

    public void setFavoriteCat2(String favoriteCat2) {
        this.favoriteCat2 = favoriteCat2;
    }

    public String getFavoriteCat3() {
        return favoriteCat3;
    }

    public void setFavoriteCat3(String favoriteCat3) {
        this.favoriteCat3 = favoriteCat3;
    }

    public String getNickname() {
        return nickname;
    }

    public users(String username, String password, String nickname) {
        this.username = username;
        this.password = password;
        this.nickname = nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public users() {
    }


    public users(Integer id, String username, String password, String sex, String age, String company, String education, String department, String address, String position, String finterest, String sinterest, String tinterest, String addtime, String state, String nickname) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.sex = sex;
        this.age = age;
        this.company = company;
        this.education = education;
        this.department = department;
        this.address = address;
        this.position = position;
        this.finterest = finterest;
        this.sinterest = sinterest;
        this.tinterest = tinterest;
        this.addtime = addtime;
        this.state = state;
        this.nickname = nickname;
    }

    public users(Integer id, String username, String sex, String age, String company, String nickname) {
        this.id = id;
        this.username = username;
        this.sex = sex;
        this.age = age;
        this.company = company;
        this.nickname = nickname;
    }

    public users(Integer id, String username, String state, String nickname, String role) {
        this.id = id;
        this.username = username;
        this.state = state;
        this.nickname = nickname;
        this.role = role;
    }

    public users(String username, String password, String sex, String age, String company, String education, String department, String address, String position, String finterest, String sinterest, String tinterest, String addtime, String state) {
        this.username = username;
        this.password = password;
        this.sex = sex;
        this.age = age;
        this.company = company;
        this.education = education;
        this.department = department;
        this.address = address;
        this.position = position;
        this.finterest = finterest;
        this.sinterest = sinterest;
        this.tinterest = tinterest;
        this.addtime = addtime;
        this.state = state;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getFinterest() {
        return finterest;
    }

    public void setFinterest(String finterest) {
        this.finterest = finterest;
    }

    public String getSinterest() {
        return sinterest;
    }

    public void setSinterest(String sinterest) {
        this.sinterest = sinterest;
    }

    public String getTinterest() {
        return tinterest;
    }

    public void setTinterest(String tinterest) {
        this.tinterest = tinterest;
    }

    public String getAddtime() {
        return addtime;
    }

    public void setAddtime(String addtime) {
        this.addtime = addtime;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
