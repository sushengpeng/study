package com.ioc.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;
import com.ioc.domain.Account;

import java.util.Arrays;
import java.util.List;
@Component
@Aspect
public class MyAdvice {
    private long timeStart;
    private long timeEnd;

    // @Pointcut("execution(void com.ioc.service.AopService.test1()) || execution(void com.ioc.dao.TestDao.test())" )
    @Pointcut("execution(void com.ioc.service.AopService.test1()))")
    private void pt() {
    }

    @Pointcut("execution(void com.ioc.service.AopService.test2()))")
    private void pt2() {}

    @Pointcut("execution(* com.ioc.service.AccountService.findAll()))")
    private void pt3() {}

    //匹配impl下面的所有方法
    @Pointcut("execution(* com.ioc.service.*.*Impl.*(..))")
    private void pt4() {}

    @Before("pt()")
    public void test() {
        this.timeStart = System.currentTimeMillis();
        System.out.println(System.currentTimeMillis());
    }

    @After("pt()")
    public void test1() {
        this.timeEnd = System.currentTimeMillis();
        long interval = this.timeEnd - this.timeStart;
        System.out.printf("间隔时间为%s\n", interval);
    }
    @Around("pt2()")
    // 此处的void 需要跟原有的返回数据类型保持一致
    public Object test2(ProceedingJoinPoint pjp) throws Throwable {
        System.out.println("before");
        Object proceed = pjp.proceed();
        System.out.println("after");
        return proceed;
    }

    // @Before("pt3()")
    // public void queryBefore() {
    //     System.out.println("------------1111--------------------");
    // }

    // @Around("pt3()")
    // public Object aroundQuery(ProceedingJoinPoint pjp) throws Throwable {
    //     this.timeStart = System.currentTimeMillis();
    //     Object proceed = pjp.proceed();
    //     this.timeEnd = System.currentTimeMillis();
    //     System.out.println("查询消耗时间：" + (this.timeEnd - this.timeStart));
    //     return proceed;
    // }
    // @Around("pt4()")
    // public void aroundImpl(ProceedingJoinPoint pjp) throws Throwable {
    //     System.out.println(3333);
    //     System.out.println(pjp.getClass());
    //     System.out.println(Arrays.toString(pjp.getArgs()));
    //     System.out.println(pjp.getSignature().toString());
    //     System.out.println(pjp);
    //     // Object proceed = pjp.proceed();
    // }

}
