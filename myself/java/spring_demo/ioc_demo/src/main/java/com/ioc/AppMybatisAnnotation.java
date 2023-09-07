package com.ioc;

import com.ioc.config.SpringConfig;
import com.ioc.domain.Account;
import com.ioc.service.AccountService;
import com.ioc.service.AopService;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.io.IOException;
import java.util.List;

@SpringBootConfiguration
public class AppMybatisAnnotation {
    public static void main(String[] args) throws IOException {
        ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);
        AccountService accountService = ctx.getBean(AccountService.class);
        AopService aopService = ctx.getBean(AopService.class);
        // List<Account> all = accountService.findAll();
        // System.out.println(all);
        // Account account = accountService.getUserById(1);
        // System.out.println(account);
        // Boolean deleteStatus = accountService.deleteById(1);
        // if (deleteStatus) {
        //     System.out.println("删除成功");
        // } else {
        //     System.out.println("删除失败");
        // }
        List<Account> all = accountService.findAll();
        aopService.test4();
        aopService.test5(1,2,3);
    }
}
