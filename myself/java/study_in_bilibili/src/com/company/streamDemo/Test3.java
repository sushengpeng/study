package com.company.streamDemo;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Stream;

/**
 * 现在有两个ArrayList集合
 * 第一个集合中:“存储6名男演员的名字和年龄。第二个集合中:存储6名女演员的名字和年龄姓名和年龄中间用逗号隔开。比如:张三,23要求完成如下的操作:
 * 1，男演员只要名字为3个字的前两人
 * 2，女演员只要姓杨的，并且不要第一个
 * 3，把过滤后的男演员姓名和女演员姓名合并到一起
 * 4，将上一步的演员信息封装成Actor对象。
 * 5，将所有的演员对象都保存到List集合中
 */
public class Test3 {
    public static void main(String[] args) {
        ArrayList<String> arrayList1 = new ArrayList<>();
        ArrayList<String> arrayList2 = new ArrayList<>();
        // List<Vector> list = new List<>();

        arrayList1.add("zhang1,22");
        arrayList1.add("zg2,18");
        arrayList1.add("ng,26");
        arrayList1.add("zg4,19");
        arrayList1.add("z5,21");
        arrayList1.add("zg6,24");

        arrayList2.add("杨1,17");
        arrayList2.add("wang2,30");
        arrayList2.add("wang3,20");
        arrayList2.add("wang4,25");
        arrayList2.add("杨5,24");
        arrayList2.add("wang6,23");

        List<String> stringList1 = arrayList1.stream().filter(item -> {
            String[] arr1 = item.split(",");
            if (arr1[0].length() == 3) {
                return true;
            }
            return false;
        }).limit(2).toList();
        // System.out.println(stringList1);
        List<String> stringList2 = arrayList2.stream().filter(item -> {
            String[] arr2 = item.split(",");
            return arr2[0].startsWith("杨");
        }).skip(1).toList();
        // System.out.println(stringList2);
        Stream<String> concatList = Stream.concat(stringList1.stream(), stringList2.stream());
        concatList.map(s -> {
            return new Performer(s.split(",")[0], Integer.parseInt(s.split(",")[1]));
        }).toList();
        // List<Performer> performerList = new ArrayList<>();
        // concatList.forEach(item -> {
        //     String[] arr3 = item.split(",");
        //     Performer p = new Performer(arr3[0], Integer.parseInt(arr3[1]));
        //     performerList.add(p);
        // });
        // System.out.println(performerList);
    }
}
