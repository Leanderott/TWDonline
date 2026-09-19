@echo off
title TWD Online - Fenster holen
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0fix-window.ps1"
echo.
pause
exit /b 0