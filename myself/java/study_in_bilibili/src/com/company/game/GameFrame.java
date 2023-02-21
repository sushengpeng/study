package com.company.game;

import lombok.Data;

import javax.swing.*;
import java.util.Random;

@Data
public class GameFrame extends JFrame {

    private JFrame jFrame;
    int[][] data = new int[4][4];

    public GameFrame(int width, int height, boolean showStatus) {
        JFrame jFrame = new JFrame();
        initImage(jFrame);
        initBar(jFrame);
        jFrame.setSize(width, height);
        jFrame.setVisible(showStatus);
        jFrame.setLocationRelativeTo(null);
        jFrame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
        jFrame.setTitle("拼图单机版 v1.0.0");
        setJFrame(jFrame);
    }

    private void initImage(JFrame jFrame) {
        initData();
        // 创建一个图片ImageIcon对象
        int index = 0;
        final int left = 25;
        final int top = 30;
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                index++;
                ImageIcon icon = new ImageIcon("D:\\github\\study\\myself\\java\\study_in_bilibili\\image\\" + index + ".jpg");
                // System.out.println(icon);
                JLabel jLabel = new JLabel(icon);
                jLabel.setBounds(60 * j + left, 60 * i + top, 60, 60);
                jFrame.getContentPane().add(jLabel);
            }
        }

    }

    // 初始化菜单
    private void initBar(JFrame jFrame) {
        JMenuBar jMenuBar = new JMenuBar();
        JMenu functionMenu = new JMenu("功能");
        JMenu aboutMenu = new JMenu("关于");
        JMenuItem replayImg = new JMenuItem("更换图片");
        JMenuItem gameAgain = new JMenuItem("重新游戏");
        JMenuItem loginAgain = new JMenuItem("重新登录");
        JMenuItem closeGame = new JMenuItem("关闭游戏");
        functionMenu.add(replayImg);
        functionMenu.add(gameAgain);
        functionMenu.add(loginAgain);
        functionMenu.add(closeGame);
        JMenuItem projectIntro = new JMenuItem("项目介绍");
        aboutMenu.add(projectIntro);
        jMenuBar.add(functionMenu);
        jMenuBar.add(aboutMenu);
        jFrame.setJMenuBar(jMenuBar);
    }

    private void initData() {
        int[] tempList = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15};
        Random r = new Random();
        for (int i : tempList) {
            int index = r.nextInt(tempList.length);
            int temp = tempList[i];
            tempList[i] = tempList[index];
            tempList[index] = temp;
        }
        for (int i : tempList) {
            data[i / 4][i % 4] = tempList[i];
        }
        for (int i = 0; i < data.length; i++) {
            StringBuilder s = new StringBuilder();
            for (int j = 0; j < data[i].length; j++) {
                s.append(data[i][j]).append(" ");
            }
            s.append("\n");
            System.out.printf(s.toString());
        }
    }
}
