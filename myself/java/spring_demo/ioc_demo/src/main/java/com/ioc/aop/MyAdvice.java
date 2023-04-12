package com.ioc.aop;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class MyAdvice {
    private long timeStart;
    private long timeEnd;

    // @Pointcut("execution(void com.ioc.service.AopService.test1()) || execution(void com.ioc.dao.TestDao.test())" )
    @Pointcut("execution(void com.ioc.service.AopService.test1()))")
    private void pt() {
    }

    @Before("pt()")
    public void test() {
        this.timeStart = System.currentTimeMillis();
        System.out.println(System.currentTimeMillis());
    }

    @After("pt()")
    public void test1() {
        this.timeEnd = System.currentTimeMillis();
        long interval = this.timeEnd - this.timeStart;
        System.out.printf("间隔时间为%s", interval);
    }

}
