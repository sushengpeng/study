package com.company.pockerGame;

import java.util.*;

public class PockerGame {
    static HashMap<Integer, String> hm = new HashMap<>();
    static ArrayList<Integer> list = new ArrayList<>();

    static {
        String[] colors = {"♥", "♦", "♣", "♠"};
        String[] numbers = {"3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2"};
        Map<String, String> map = Map.of("3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A");
        int count = 0;
        for (String number : numbers) {
            for (String color : colors) {

                hm.put(count, color + number);
                list.add(count);
                System.out.println(count);
                count++;
            }
        }
        hm.put(++count, "大王");
        list.add(count);
        hm.put(++count, "小王");
        list.add(count);
    }

    public PockerGame() {
        Collections.shuffle(list);
        System.out.println(list);
        System.out.println(hm);
        TreeSet<Integer> lord = new TreeSet<>();
        TreeSet<Integer> user1 = new TreeSet<>();
        TreeSet<Integer> user2 = new TreeSet<>();
        TreeSet<Integer> user3 = new TreeSet<>();
        for (int i = 0; i < list.size(); i++) {
            int serialNumber = list.get(i);
            if (i <= 2) {
                lord.add(serialNumber);
            }
            if (i % 3 == 0) {
                user1.add(serialNumber);
            } else if (i % 3 == 1) {
                user2.add(serialNumber);
            } else {
                user3.add(serialNumber);
            }
        }
        lookPocker("user1", user1);
        lookPocker("user2", user2);
        lookPocker("user3", user3);
        lookPocker("底牌", lord);
    }

    public void lookPocker(String name, TreeSet<Integer> ts) {
        StringJoiner sj = new StringJoiner(",",name + ": [","]");
        for (Integer t : ts) {
            sj.add(hm.get(t));
        }
        System.out.println(sj.toString());
    }
}
