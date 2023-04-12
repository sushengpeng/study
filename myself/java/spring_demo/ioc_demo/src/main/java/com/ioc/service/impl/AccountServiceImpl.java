package com.ioc.service.impl;

import com.ioc.dao.AccountDao;
import com.ioc.domain.Account;
import com.ioc.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired(required=false)
    private AccountDao accountDao;

    @Override
    public List<Account> findAll() {
        System.out.println("111111");
        return accountDao.findAll();
    }

    @Override
    public void addUser(Account account) {
        accountDao.addUser(account);
    }

    @Override
    public Account getUserById(Integer id) {
        return accountDao.getUserById(String.valueOf(id));
    }

    @Override
    public Boolean deleteById(Integer id) {
        try {
            accountDao.deleteUser(String.valueOf(id));
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
