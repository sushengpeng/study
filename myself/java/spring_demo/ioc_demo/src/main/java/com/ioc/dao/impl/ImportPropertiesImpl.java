package com.ioc.dao.impl;

import com.ioc.dao.ImportProperties;

public class ImportPropertiesImpl implements ImportProperties {
    private String name;

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public void save() {
        System.out.println("print ....." + name);
    }
}
