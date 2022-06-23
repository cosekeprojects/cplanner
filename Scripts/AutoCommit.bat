@echo off
:TOP
cd "C:\Users\ewaty\Documents\COSEKE_WORK\REACT\PRT"
git status
git add .
git commit -m "Auto commit Eric Watyekele Coseke %date% %time%"
git push
goto :TOP