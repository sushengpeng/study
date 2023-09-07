package com.company.studentManager;

import java.util.ArrayList;
public class Menu {
    private String menu;
    final String[] menuItems = new String[]{"添加学生","删除学生","修改学生","查询学生","退出"};
    public Menu() {
        StringBuilder printInConsole = new StringBuilder();
        printInConsole.append("“----------------欢迎来到xxx学生管理系统----------------”\n");
        for (int i = 0; i < menuItems.length; i++) {
            printInConsole.append("“").append(i+1).append(": ").append(menuItems[i]).append("”").append("\n");
        }
        printInConsole.append("”请输入你的选择：”\n");
        this.menu = printInConsole.toString();
    }

    public String getMenu() {
        return menu;
    }
}
