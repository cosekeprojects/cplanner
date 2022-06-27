#!/bin/bash
cd "/var/www/reactapp/gdcplanner/cplanner"
git init
git checkout main
git remote add upstream https://github.com/cosekeprojects/cplanner.git
git fetch upstream
git merge upstream/main
