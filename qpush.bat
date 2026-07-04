@echo off
REM Quick push script - just run "qpush" from the repo directory
cd /d "C:\Users\socialdemocracy\dynamic_biennio_rosso_alternate_history"
git add .
git commit -m "Quick update: %date% %time%"
git push origin main
echo Done!
