package com.company.baseDemo;

import java.util.Random;

public class PersonTemplate {
    private String name;
    private int bloodVolume;
    private int power;
    private char gender;
    private String face;
    String[] boyfaces = {"风流俊雅", "气宇轩昂", "相貌英俊", "五官端正", "相貌平平", "一塌糊涂", "面目狰疗"};
    String[] girlfaces = {"美奂绝伦", "沉鱼落雁", "婷婷玉立", "身材娇好", "相貌平平", "相貌简陋", "惨不忍睹"};

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public String getFace() {
        return face;
    }

    public void setFace() {
        Random r = new Random();
        if (this.gender == '男') {
            int index = r.nextInt(boyfaces.length);
            this.face = boyfaces[index];
        } else if (this.gender == '女') {
            int index = r.nextInt(girlfaces.length);
            this.face = girlfaces[index];
        } else {
            this.face = "惨不忍睹";
        }
    }

    public int getPower() {
        return power;
    }

    public void setPower() {
        this.power = (int) Math.floor(Math.random() * 100);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getBloodVolume() {
        return bloodVolume;
    }

    public void setBloodVolume(int bloodVolume) {
        this.bloodVolume = bloodVolume;
    }

    // 攻击行为
    public void action(PersonTemplate person) {
        // 攻击人
        String attackers = this.getName();
        // 受害者
        String victim = person.getName();
        int attackers_bloodVolume = this.getBloodVolume();
        int victim_bloodVolume = person.getBloodVolume();
        while (attackers_bloodVolume >= 0 && victim_bloodVolume >= 0) {
            attackers_bloodVolume -= person.getPower();
            victim_bloodVolume -= this.getPower();
            System.out.println(attackers + "当前的血量为" + attackers_bloodVolume);
            System.out.println(victim + "当前的血量为" + victim_bloodVolume);
        }
        // System.out.printf("");
        System.out.println((attackers_bloodVolume < victim_bloodVolume ? attackers : victim) + "战败");
        // 剩余血量p
//        int surplus = attackers_bloodVolume - victim_bloodVolume;
//        if(surplus < 0) {
//            System.out.print(attackers + "战败");
//        } else {
//            System.out.println(attackers + "去攻击"+ victim);
//            System.out.println(attackers + "当前血量为：" + surplus);
//        }
    }

    public PersonTemplate(String name, int bloodVolume, char gender) {
        this.name = name;
        this.bloodVolume = bloodVolume;
        this.gender = gender;
        this.setPower();
        this.setFace();
//        System.out.println(this.name + "当前的血量为" + this.bloodVolume + "\n攻击力为" + this.power);
        System.out.printf("%s的%s(%s)被创建，其血量为：%s，攻击力为：%s\n", this.face, this.name, this.gender, this.getBloodVolume(), this.power);
    }

    public static void main(String[] args) {

    }
}
