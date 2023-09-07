package com.company.game;

import lombok.Data;

import javax.swing.*;
@Data
public class RegisterFrame extends JFrame{
    private JFrame jFrame;
    public RegisterFrame(int width, int height, boolean showStatus) {
        JFrame jFrame = new JFrame();
        jFrame.setSize(width, height);
        jFrame.setVisible(showStatus);
        jFrame.setLocationRelativeTo(null);
        jFrame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
        jFrame.setTitle("注册");
        setJFrame(jFrame);
    }
}
