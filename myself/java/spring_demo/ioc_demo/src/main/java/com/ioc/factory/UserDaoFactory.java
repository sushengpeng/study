package com.ioc.factory;

import com.ioc.dao.UserDao;

public class UserDaoFactory {
    public UserDao getUserDao() {
        return new UserDao();
    }
}
