package com.company.streamDemo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

public class Test2 {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("zhangsan,23");
        list.add("wangwu,24");
        list.add("lisi,25");
        HashMap<String, String> hm = new HashMap<>();
        // list.stream().forEach(nameAndValue -> {
        //     String[] _list = nameAndValue.split(",");
        //     if (Integer.parseInt(_list[1]) >= 24) {
        //         hm.put(_list[0], _list[1]);
        //     }
        // });
        // ctrl + alt +v
        Map<String, Integer> collect = list.stream()
                .filter(s -> Integer.parseInt(s.split(",")[1]) >= 24)
                .collect(Collectors.toMap(
                        s -> s.split(",")[0],
                        s -> Integer.parseInt(s.split(",")[1])));
        System.out.println(collect);
    }
}
