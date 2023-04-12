package com.ioc;


import com.ioc.config.SpringConfig;
import com.ioc.service.AopService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/*
AOP(Aspect Oriented Programming)面向切面编程，一种编程范式，指导开发者如何组织程序结构
        00P(Object oriented Programming)面向对象编程
作用:在不惊动原始设计的基础上为其进行功能增强
AOP核心概念
    连接点 (JoinPoint)
    切入点 (Pointcut)
    通知 (Advice)
    通知类切面 (Aspect)
思路分析：
    1.导入坐标(pom.xml)
    2.制作连接点方法(原始操作，Dao接口与实现类 )
    3.制作共性功能(通知类与通知
    4.定义切入点
    5.绑定切入点与通知关系 (切面 )
*/
public class AppAop {
    public static void main(String[] args) {
        ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);
        AopService aopService = ctx.getBean(AopService.class);
        aopService.test1();
    }
}
