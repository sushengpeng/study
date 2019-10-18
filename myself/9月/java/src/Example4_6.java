class Computer{
    static double max(double a,double b){
        return a>b?a:b;
    }
}
public class computer {
    public static void main(String args[]) {
        double max = Computer.max(44,55);
        System.out.println(max);
    }
}
