@echo off
cd "C:\Users\ewaty\Documents\COSEKE_WORK\REACT\PRT"
echo "pulling main"
git pull origin main
echo "Checking out main branch for cplanner"
git checkout main
echo "Merged request for EricDevInitiated"
git merge EricDev
echo "Pushing merge request to main"
git push -u origin main
echo "Merged Successfully!"
echo "Returning to EricDev branch!"
git checkout EricDev
echo "Now on EricDev branch"