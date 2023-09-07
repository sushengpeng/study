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
概念:AOP(Aspect Oriented Programming)面向切面编程，一种编程范式
作用:在不惊动原始设计的基础上为方法进行功能增强
核心概念
    代理(Proxy ):SpringAOP的核心本质是采用代理模式实现的
    连接点(JoinPoint ) : 在SpringAoP中，理解为任意方法的执行
    切入点( Pointcut ) :匹配连接点的式子，也是具有共性功能的方法描述
    通知(Advice): 若个方法的共性功能，在切入点处执行，最终体现为一个方法
    切面(Aspect):描述通知与切入点的对应关系
    目标对象(Target ):被代理的原始对象成为目标对象
通知类型
    前置通知 before
    后置通知 after
    环绕通知( 重点 ) around
        环绕通知依赖形参ProceedingJoinPoint才能实现对原始方法的调用
        环绕通知可以隔离原始方法的调用执行
        环绕通知返回值设置为object类型
        环绕通知中可以对原始方法调用过程中出现的异常进行处理
    返回后通知 AfterReturning
    抛出异常后通知 AfterThrowing
*/
public class AppAop {
    public static void main(String[] args) {
        ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);
        AopService aopService = ctx.getBean(AopService.class);
        aopService.test1();
        aopService.test2();
    }
}
