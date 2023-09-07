package com.ioc;

import com.ioc.config.SpringConfig;
import com.ioc.service.AccountService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class AppTransactionManager {
    public static void main(String[] args) {
        ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);
        AccountService accountService = ctx.getBean(AccountService.class);
        accountService.transfer("2", "3", 5D);
        // accountService.outMoney("2", 99.00);
        // Double money = 200.00;
        // Boolean aBoolean = accountService.outMoney("3", money);
        // if (aBoolean) {
        //     System.out.println("扣除3账户金额成功");
        //     Boolean aBoolean1 = accountService.inMoney("2", money);
        //     if (aBoolean1) System.out.println("2账户进账成功");
        // }
    }
}
