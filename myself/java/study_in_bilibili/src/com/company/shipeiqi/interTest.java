package com.company.shipeiqi;

public class interTest {
    public static void main(String[] args) {
        interImpl interImpl = new interImpl();
        interImpl.method1();
        // interAdapter interAdapter = new interAdapter(); //'interAdapter' 为 abstract；无法实例化
    }
}
