package com.company.girlFriend;

public class GirlFriendTest {
    public static void main(String[] args) {
        GirlFriend[] list = new GirlFriend[4];
        GirlFriend friend1 = new GirlFriend("萨拉附",'女',22,"打球");
        GirlFriend friend2 = new GirlFriend("阿斯蒂芬",'女',28,"打球");
        GirlFriend friend3 = new GirlFriend("里啊啊",'女',18,"打球");
        GirlFriend friend4 = new GirlFriend("拉法基",'女',25,"打球");
        list[0] = friend1;
        list[1] = friend2;
        list[2] = friend3;
        list[3] = friend4;
        double avg = 0;
        for (GirlFriend girlFriend : list) {
            avg += girlFriend.getAge() * 1.0 / list.length;
        }
        System.out.println(avg);
        for (GirlFriend girlFriend : list) {
            if(girlFriend.getAge()< avg)
                girlFriend.printInfo();
        }
    }
}
