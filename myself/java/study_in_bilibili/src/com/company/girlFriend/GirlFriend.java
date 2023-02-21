package com.company.girlFriend;

public class GirlFriend {
    private String name;
    private char gender;
    private int age;
    private String favorite;

    public GirlFriend() {
    }

    public GirlFriend(String name, char gender, int age, String favorite) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.favorite = favorite;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getFavorite() {
        return favorite;
    }

    public void setFavorite(String favorite) {
        this.favorite = favorite;
    }
    public void printInfo() {
        System.out.printf("姓名%s,性别为%s,爱好为%s\n",this.name,this.gender,this.favorite);
    }
    public static void main(String[] args) {

    }
}
