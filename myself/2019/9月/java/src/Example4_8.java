class People {
    double getArea(double x, double y) {
        return x * y;
    }

    char getArea(int x, int y) {
        return (char) ((int) (x * y));
    }

    double getArea(double x, double y, double z) {
        return (x * x + y * y + z * z) * 2;
    }
}

public class Example4_8 {
    public static void main(String[] args) {
        People zhang = new People();
        System.out.println(zhang.getArea(1.1, 5.5, 3.3));
        System.out.println(zhang.getArea(1, 5));
    }
}
