package com.company.innerClass;

public class Car {
    private Brand carBrand;
    private Age carAge;
    private String carColor;
    private Brand engineBrand;
    private Age engineAge;

    public Car() {
    }

    public Car(Brand carBrand, Age carAge, String carColor, Brand engineBrand, Age engineAge) {
        this.carBrand = carBrand;
        this.carAge = carAge;
        this.carColor = carColor;
        this.engineBrand = engineBrand;
        this.engineAge = engineAge;
    }

    public Brand getCarBrand() {
        return carBrand;
    }

    public void setCarBrand(Brand carBrand) {
        this.carBrand = carBrand;
    }

    public Age getCarAge() {
        return carAge;
    }

    public void setCarAge(Age carAge) {
        this.carAge = carAge;
    }

    public String getCarColor() {
        return carColor;
    }

    public void setCarColor(String carColor) {
        this.carColor = carColor;
    }

    public Brand getEngineBrand() {
        return engineBrand;
    }

    public void setEngineBrand(Brand engineBrand) {
        this.engineBrand = engineBrand;
    }

    public Age getEngineAge() {
        return engineAge;
    }

    public void setEngineAge(Age engineAge) {
        this.engineAge = engineAge;
    }
}
