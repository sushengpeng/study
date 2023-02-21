package com.company.mapDemo;

import java.util.HashMap;
import java.util.Map;

public class Test2 {
    public static void main(String[] args) {
        Map<Integer, Character> statisticsMap = new HashMap<>();
        Character[] areaList = {'A', 'B', 'C', 'D'};
        for (int i = 0; i < 80; i++) {
            Character area = areaList[(int) Math.floor(Math.random() * areaList.length)];
            statisticsMap.put(i, area);
        }
        System.out.println(statisticsMap);
        Map<Character, Integer> statisticsNumber = new HashMap<>();
        for (Character character : areaList) {
            statisticsNumber.put(character, 0);
        }
        statisticsMap.forEach((Integer id, Character area) -> {
                    Integer number = statisticsNumber.get(area);
                    statisticsNumber.put(area, ++number);
                    // statisticsNumber.put(area, ++statisticsNumber.get(area));
                }
        );
        System.out.println(statisticsNumber);
        int max = 0;
        char maxChar = 0;
        for (Map.Entry<Character, Integer> characterIntegerEntry : statisticsNumber.entrySet()) {
            max = Math.max(max, characterIntegerEntry.getValue());
            if(max == characterIntegerEntry.getValue()){
                maxChar = characterIntegerEntry.getKey();
            }
        }
        System.out.println(maxChar);
    }
}
