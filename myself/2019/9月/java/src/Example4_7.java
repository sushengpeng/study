class Jerry{
    int leg;
    Jerry(int n){
        leg=n;
    }

    public int getLeg() {
        return leg;
    }

    public void setLeg(int leg) {
        this.leg = leg;
    }
}
class Tom{
    void f(Jerry mouse){
        mouse.setLeg(12);
        System.out.println(mouse.getLeg());
        mouse = null;
    }
}
public class Example4_7 {
    public static void main(String[] args) {
        Tom cat = new Tom();
        Jerry jerry = new Jerry(2);
        System.out.println(jerry.getLeg());
        cat.f(jerry);
        System.out.println(jerry.getLeg());
    }
}
