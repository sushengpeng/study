package com.company.game;

import lombok.Data;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

@Data
public class LoginFrame extends JFrame implements ActionListener {
    private String username;
    private String password;
    private JFrame jFrame;

    public LoginFrame(int width, int height, boolean showStatus) {
        JFrame jFrame = new JFrame();
        jFrame.setSize(width, height);
        jFrame.setLayout(null);
        initButton(jFrame);
        jFrame.setVisible(showStatus);
        jFrame.setLocationRelativeTo(null);
        jFrame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
        jFrame.setTitle("登录");
        setJFrame(jFrame);
    }

    private void initButton(JFrame jFrame) {
        JButton login = new JButton("登录");
        login.setBounds(50, 160, 80, 40);
        login.addActionListener(this);
        JButton register = new JButton("注册");
        register.setBounds(180, 160, 80, 40);
        jFrame.getContentPane().add(login);
        jFrame.getContentPane().add(register);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        System.out.print("1111");
    }
}
