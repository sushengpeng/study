package com.company.game;

import javax.swing.*;

public class IFrame extends JFrame{
    private int width;
    private int height;
    private boolean showStatus;
    private JFrame frame;
    public IFrame() {
    }

    public IFrame(int width, int height, boolean showStatus, JMenuBar jMenuBar) {
        initFrame(width, height, showStatus);
        frame.setJMenuBar(jMenuBar);
    }

    private void initFrame(int width, int height, boolean showStatus) {
        JFrame jFrame = new JFrame();
        ImageIcon icon = new ImageIcon("D:\\github\\study\\myself\\java\\study_in_bilibili\\image\\mmexport1665402579501.jpg");
        JLabel jLabel = new JLabel(icon);
        jFrame.setSize(width, height);
        jFrame.setVisible(showStatus);
        jFrame.setLocationRelativeTo(null);
        jFrame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
        jFrame.add(jLabel);
        setFrame(jFrame);
    }
    public IFrame(int width, int height, boolean showStatus) {
        this.width = width;
        this.height = height;
        this.showStatus = showStatus;
        initFrame(width, height, showStatus);
        // return initFrame(width, height, showStatus);
    }

    public IFrame(int width, int height) {
        this.width = width;
        this.height = height;
        initFrame(width, height, false);
        // return this.initFrame(width, height, false);
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public boolean isShowStatus() {
        return showStatus;
    }

    public void setShowStatus(boolean showStatus) {
        this.showStatus = showStatus;
    }

    public JFrame getFrame() {
        return frame;
    }

    public void setFrame(JFrame frame) {
        this.frame = frame;
    }

}
