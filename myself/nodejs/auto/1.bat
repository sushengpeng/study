@echo off
:menu
echo ��Y����   ��N���ر�   ��C���˳�&echo.
set /p yn=������ѡ���س�ȷ�ϣ�
if /i "%yn%"=="y" goto yes
if /i "%yn%"=="n" goto no
if /i "%yn%"=="c" exit
echo ��������������ѯ���롣&ping 0 -n "2">nul&cls&goto menu
:yes
netsh wlan set hostednetwork mode=allow ssid=S.H.I.E.L.Dnetwork key=wuchunmu keyUsage=temporary
netsh wlan start hostednetwork
netsh wlan show hostednetwork
echo.&echo Please press any key to end...&pause>nul
exit
:no
netsh wlan stop hostednetwork
echo.&echo Please press any key to end...&pause>nul
exit