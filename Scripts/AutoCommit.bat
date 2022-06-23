@echo off
:TOP
cd "C:\Users\ewaty\Documents\COSEKE_WORK\REACT\PRT"
git status
git checkout EricDev
git add .
git commit -m "Auto commit Eric Watyekele Coseke %date% %time%"
git push
git checkout EricDev
goto :TOP