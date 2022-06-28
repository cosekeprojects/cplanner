@echo off
:TOP
cd "C:\Users\ewaty\Documents\COSEKE_WORK\REACT\PRTSYNC"
git init
git checkout main
git remote add upstream  https://github.com/cosekeprojects/cplanner.git
git fetch upstream
git merge upstream/main
goto :TOP