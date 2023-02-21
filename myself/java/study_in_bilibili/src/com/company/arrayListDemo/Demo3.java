package com.company.arrayListDemo;

import java.util.ArrayList;

public class Demo3 {
    public static void main(String[] args) {
        ArrayList<Phone> phoneList = new ArrayList<Phone>();
        Phone phone1 = new Phone("phone001", "华为p40", 4000);
        Phone phone2 = new Phone("phone002", "小米40", 3000);
        Phone phone3 = new Phone("phone003", "联想", 5000);
        phoneList.add(phone1);
        phoneList.add(phone2);
        phoneList.add(phone3);
        ArrayList<Phone> newPhoneList = getPhoneList(phoneList);
        for (Phone phone : newPhoneList) {
            System.out.printf("手机名称：%s，价格：%s\n", phone.getName(), phone.getPrice());
        }
    }

    /*
     * @param phoneList
     * @return phoneList
     */
    public static ArrayList<Phone> getPhoneList(ArrayList<Phone> list) {
        ArrayList<Phone> newPhoneList = new ArrayList<Phone>();
        for (Phone phone : list) {
            if (phone.getPrice() >= 4000) {
                newPhoneList.add(phone);
            }
        }
        return newPhoneList;
    }
}
