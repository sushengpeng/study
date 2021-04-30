@echo off
:menu
echo 【Y】打开   【N】关闭   【C】退出&echo.
set /p yn=请输入选择后回车确认：
if /i "%yn%"=="y" goto yes
if /i "%yn%"=="n" goto no
if /i "%yn%"=="c" exit
echo 您输入的有误，请查询输入。&ping 0 -n "2">nul&cls&goto menu
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