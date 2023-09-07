package com.ioc.service.impl;

import com.ioc.service.UserLoginService;
import org.springframework.stereotype.Component;

@Component("userLoginService")
public class userLoginServiceImpl implements UserLoginService {
    @Override
    public Boolean login(String username, String password) {
        return "admin".equals(username) && "123456".equals(password);
    }
}
