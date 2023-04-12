package com.ioc.service.impl;

import com.ioc.dao.BookDao;
import com.ioc.service.BookService;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Component;

import java.util.*;

@Component("BookService")
public class BookServiceImpl implements BookService, InitializingBean, DisposableBean {
    // DI的用法
    private BookDao bookDao;

    public void save() {
        System.out.println("book service save ...");
        bookDao.save();
    }

    public void setBookDao(BookDao bookDao) {
        this.bookDao = bookDao;
    }

    public void init() {
        System.out.println("init ...");
    }



    @Override
    public void destroy() throws Exception {
        System.out.println("bean destroy ...");
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("bean init ...");
    }
}
