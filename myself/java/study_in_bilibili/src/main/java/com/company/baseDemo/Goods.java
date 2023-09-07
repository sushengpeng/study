package com.company.baseDemo;

public class Goods {
    private String name;
    private String id;
    private double price;
    private int count;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public Goods(String name, String id, double price, int count) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.count = count;

    }

    public static void main(String[] args) {

    }
}
