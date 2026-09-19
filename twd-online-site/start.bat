@echo off
setlocal
title TWD Online - Survival Database
cd /d "%~dp0"
set "URL=%CD%\index.html"

rem Try to open the page. Order:
rem   1) Edge 2) Chrome 3) Firefox 4) Windows default handler 5) Explorer.exe

rem ---------- 1) MICROSOFT EDGE ----------
set "EDGE_1=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
set "EDGE_2=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"
set "EDGE_3=%LocalAppData%\Microsoft\Edge\Application\msedge.exe"
if exist "%EDGE_1%" ( start "" "%EDGE_1%" --new-window "%URL%" & goto :opened )
if exist "%EDGE_2%" ( start "" "%EDGE_2%" --new-window "%URL%" & goto :opened )
if exist "%EDGE_3%" ( start "" "%EDGE_3%" --new-window "%URL%" & goto :opened )

rem ---------- 2) CHROME ----------
set "CHROME_1=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
set "CHROME_2=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
set "CHROME_3=%LocalAppData%\Google\Chrome\Application\chrome.exe"
if exist "%CHROME_1%" ( start "" "%CHROME_1%" --new-window "%URL%" & goto :opened )
if exist "%CHROME_2%" ( start "" "%CHROME_2%" --new-window "%URL%" & goto :opened )
if exist "%CHROME_3%" ( start "" "%CHROME_3%" --new-window "%URL%" & goto :opened )

rem ---------- 3) FIREFOX ----------
set "FF_1=%ProgramFiles%\Mozilla Firefox\firefox.exe"
set "FF_2=%ProgramFiles(x86)%\Mozilla Firefox\firefox.exe"
if exist "%FF_1%" ( start "" "%FF_1%" -new-window "%URL%" & goto :opened )
if exist "%FF_2%" ( start "" "%FF_2%" -new-window "%URL%" & goto :opened )

rem ---------- 4) WINDOWS DEFAULT HANDLER ----------
start "" "%URL%"
goto :opened

:opened
echo.
echo  ============================================
echo     TWD ONLINE  -  SURVIVAL DATABASE
echo  ============================================
echo.
echo  The page is opening in your browser.
echo   - Everything green worked? Great.
echo   - Nothing opened? Run these steps:
echo       1. Open Windows Explorer
echo       2. Go to:  %~dp0
echo       3. Double-click the file:  index.html
echo       4. If asked, choose your browser (Edge / Chrome / Firefox)
echo.
echo  Tip: press  /  to search, click any item, ESC to close.
echo.
ping 127.0.0.1 -n 4 >nul
pause
exit /b 0