package com.ioc.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
@Aspect
public class PasswordAdvice {
    @Pointcut("execution(* com.ioc.service.UserLoginService.login(..)))")
    private void validatorUser() {
    }

    @Around("validatorUser()")
    public void validatorUserAround(ProceedingJoinPoint pjp) throws Throwable {
        Object[] args = pjp.getArgs();
        String userName = (String) args[0];
        args[0] = userName.trim();
        Object proceed = pjp.proceed(args);
        System.out.println(Arrays.toString(args));
    }
}
