package com.ioc.service.impl;

import com.ioc.dao.AccountDao;
import com.ioc.domain.Account;
import com.ioc.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired(required = false)
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

    @Override
    public Boolean outMoney(String id, Double money) {
        UserAccountImpl accountInfo = getAccountInfo(id);
        String result = "";
        if (Double.valueOf(accountInfo.getMoney()) < money) {
            System.out.println("当前账户余额不足");
        } else {
            try {
                accountDao.outMoney(id, money);
                result = "1";
            } catch (Exception e) {
                result = "0";
                throw new RuntimeException(e);
            }
        }
        return "1".equals(result);
    }

    @Override
    public Boolean inMoney(String id, Double money) {
        String result = "";
        try {
            accountDao.inMoney(id, Double.valueOf(money));
            result = "1";
        } catch (Exception e) {
            result = "0";
            throw new RuntimeException(e);
        }
        return "1".equals(result);
    }

    @Override
    public UserAccountImpl getAccountInfo(String id) {
        return accountDao.queryUserAccount(id);
    }

    public void transfer(String in, String out, Double money) {
        outMoney(out, money);
        // int i = 1/0;
        inMoney(in, money);
    }
}
