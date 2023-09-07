package com.company.game;

import lombok.Data;

@Data
public class Game implements FrameStatus {
    private int frameStatus;
    private LoginFrame loginFrame;
    private RegisterFrame registerFrame;
    private GameFrame gameFrame;
    private MyFrame myFrame;

    public void frameStatusChange() {
        switch (frameStatus) {
            case SHOW_LOGIN:
                loginFrame.getJFrame().setVisible(true);
                break;
            case SHOW_REGISTER:
                registerFrame.getJFrame().setVisible(true);
                break;
            case SHOW_GAME:
                gameFrame.getJFrame().setVisible(true);
                break;
            case SHOW_MY:
                myFrame.getJFrame().setVisible(true);
                break;
        }
    }

    public Game() {
        setFrameStatus(SHOW_MY);
        setLoginFrame(new LoginFrame(300, 300, frameStatus == SHOW_LOGIN));
        setRegisterFrame(new RegisterFrame(300, 400, frameStatus == SHOW_REGISTER));
        setGameFrame(new GameFrame(300, 500, frameStatus == SHOW_GAME));
        setMyFrame(new MyFrame(300, 500, frameStatus == SHOW_MY));
    }
}
