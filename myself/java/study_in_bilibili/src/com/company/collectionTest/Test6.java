package com.company.collectionTest;

import java.util.*;

public class Test6 {
    public static void main(String[] args) {
        // 江苏省=南京市,扬州市,苏州市,无锡市,常州市
        // 湖北省=武汉市,孝感市,十堰市,宜昌市,鄂州市
        // 河北省=石家庄市,唐山市,邢台市,保定市,张家口市
        Map<String, ArrayList<String>> provinceList = new HashMap<>();
        ArrayList<String> citys1 = new ArrayList<>();
        ArrayList<String> citys2 = new ArrayList<>();
        ArrayList<String> citys3 = new ArrayList<>();
        Collections.addAll(citys1,"南京市", "扬州市", "苏州市", "无锡市", "常州市");
        Collections.addAll(citys2,"武汉市", "孝感市", "十堰市", "宜昌市", "鄂州市");
        Collections.addAll(citys3,"石家庄市", "唐山市", "邢台市", "保定市", "张家口市");
        provinceList.put("江苏省",citys1);
        provinceList.put("湖北省",citys2);
        provinceList.put("河北省",citys3);
        System.out.println(provinceList);
        Set<Map.Entry<String, ArrayList<String>>> entries = provinceList.entrySet();
        StringBuilder result = new StringBuilder();
        for (Map.Entry<String, ArrayList<String>> entry : entries) {
            String key = entry.getKey();
            ArrayList<String> value = entry.getValue();
            StringJoiner sj = new StringJoiner(",",key + "=","\n");
            for (String s : value) {
                sj.add(s);
            }
            result.append(sj.toString());
        }
        System.out.println(result);
    }
}
