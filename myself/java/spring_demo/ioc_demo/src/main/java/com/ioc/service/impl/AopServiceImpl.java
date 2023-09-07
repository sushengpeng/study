package com.ioc.service.impl;

import com.ioc.service.AopService;
import org.springframework.stereotype.Component;

@Component("AopService")
public class AopServiceImpl implements AopService {
    @Override
    public void test1() {
        System.out.println("test1");
    }

    @Override
    public void test2() {
        System.out.println("test2");
    }

    @Override
    public void test3() {
        System.out.println("test3");
    }

    @Override
    public void test4() {
        System.out.println("test4");
    }

    @Override
    public void test5(int a, int b, int c) {
        System.out.println(a + "" + b + "" + c);
    }
}
