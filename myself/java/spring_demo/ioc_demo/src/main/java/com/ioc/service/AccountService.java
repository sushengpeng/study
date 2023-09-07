package com.ioc.service;

import com.ioc.domain.Account;
import com.ioc.service.impl.UserAccountImpl;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface AccountService {
    List<Account> findAll();
    void addUser(Account account);
    Account getUserById(Integer id);
    Boolean deleteById(Integer id);
    Boolean outMoney(String id, Double money);
    Boolean inMoney(String id, Double money);
    UserAccountImpl getAccountInfo(String id);
    @Transactional
    void transfer(String in, String out, Double money);
}
