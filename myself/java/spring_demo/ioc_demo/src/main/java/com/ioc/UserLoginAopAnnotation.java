package com.ioc;

import com.ioc.config.SpringConfig;
import com.ioc.domain.Account;
import com.ioc.service.AccountService;
import com.ioc.service.AopService;
import com.ioc.service.UserLoginService;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.io.IOException;
import java.util.List;

@SpringBootConfiguration
public class UserLoginAopAnnotation {
    public static void main(String[] args) throws IOException {
        ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);
        UserLoginService userLoginService = ctx.getBean(UserLoginService.class);
        userLoginService.login("user ","12345");
    }
}
