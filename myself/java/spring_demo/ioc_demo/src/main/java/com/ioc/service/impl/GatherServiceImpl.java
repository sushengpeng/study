package com.ioc.service.impl;

import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

public class GatherServiceImpl {
    private int[] array;
    private List<String> list;
    private Set<String> set;
    private Map<String,String> map;
    private Properties properties;

    public void setArray(int[] array) {
        this.array = array;
    }

    public void setList(List<String> list) {
        this.list = list;
    }

    public void setSet(Set<String> set) {
        this.set = set;
    }

    public void setMap(Map<String, String> map) {
        this.map = map;
    }

    public void setProperties(Properties properties) {
        this.properties = properties;
    }
    public void printItem(){
        System.out.println(array);
        System.out.println(list);
        System.out.println(map);
        System.out.println(set);
        System.out.println(properties);
    }
}
