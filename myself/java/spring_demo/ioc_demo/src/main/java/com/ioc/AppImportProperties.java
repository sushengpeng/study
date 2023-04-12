package com.ioc;

import com.ioc.dao.ImportProperties;
import com.ioc.dao.impl.ImportPropertiesImpl;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class AppImportProperties {
    public static void main(String[] args) {
        // ctrl + h
        // ctrl + alt + u
        ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("importProperties.xml");
        // ImportPropertiesImpl importPropertiesImpl= (ImportPropertiesImpl) ctx.getBean("importPropertiesImpl");
        // ImportPropertiesImpl importPropertiesImpl = ctx.getBean(ImportPropertiesImpl.class);
        ImportPropertiesImpl importPropertiesImpl = ctx.getBean("importPropertiesImpl",ImportPropertiesImpl.class);
        importPropertiesImpl.save();
    }
}
