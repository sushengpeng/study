package com.ioc.service;

import com.ioc.domain.Account;

import java.util.List;

public interface AccountService {
    List<Account> findAll();
    void addUser(Account account);
    Account getUserById(Integer id);
    Boolean deleteById(Integer id);
}
