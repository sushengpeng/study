package com.company.regDemo;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegTest {
    public static void main(String[] args) {
        System.out.println("在范围内");
        System.out.println("ab".matches("[abc]"));
        System.out.println("z".matches("[abc]"));
        System.out.println("abc".matches("[abc]")); //大括号后的自能出现一次
        System.out.println("a".matches("[abc]"));
        System.out.println("ab".matches("[abc][abc]"));
        System.out.println("abc".matches("abc"));

        System.out.println("不在范围内");
        System.out.println("ab".matches("[^abc]"));
        System.out.println("z".matches("[^abc]"));
        System.out.println("abc".matches("[^abc]"));
        System.out.println("a".matches("[^abc]"));
        System.out.println("ab".matches("[^abc][^abc]"));

        System.out.println("在区间内部");
        System.out.println("a".matches("[a-zA-Z0-9]"));
        System.out.println("d".matches("[a-be-f]"));

        System.out.println("且或关系");
        // 如果是一个&就只表示&字符
        System.out.println("d".matches("[a-f&&[abcd]]"));
        System.out.println("&".matches("[a-f&[abcd]]"));
        System.out.println("g".matches("[a-f||gui]"));
        System.out.println("|".matches("[a-f|gui]"));
        System.out.println("邮箱验证");
        String regex3 ="\\w+@[\\w&&[^_]]{2,6}(\\.[a-zA-Z]{2,3}){1,2}";
        System.out.println("3232323@qq.com".matches(regex3));
        System.out.println("zhangsan@itcast.cnn".matches(regex3));
        System.out.println("dlei0009@163.com".matches(regex3));
        System.out.println("dlei0009@pci.com.cn".matches(regex3));
        String str = "Java自从95年问世以米，经历了很多版术，目前企业中用的最多的是Java8和Java11，"
                +"因为这两个是长期支持版木，下一个长期支持版木是Java17，相信在未来不久Java17也会逐渐登上历史舞台";
        Pattern p = Pattern.compile("Java\\d{0,2}");
        Matcher m = p.matcher(str);
        // 调用一次往前找一次
        while (m.find()) {
            System.out.println(m.group());
        }
        // boolean b = m.find();

    }
}
