@echo off
setlocal

:: Run pkg and check for errors
echo "Running pkg..."
::pkg .
echo "pkg command executed with errorlevel %errorlevel%"
if %errorlevel% neq 0 (
    echo "Error: pkg command failed."
    exit /b %errorlevel%
)
::echo "pkg command completed successfully."

:: Add changes to git and check for errors
echo "Running git add..."
git add .
echo "git add executed with errorlevel %errorlevel%"
if %errorlevel% neq 0 (
    echo "Error: git add command failed."
    exit /b %errorlevel%
)
echo "git add completed successfully."

:: Commit changes to git and check for errors
echo "Running git commit..."
git commit -m "deploy"
echo "git commit executed with errorlevel %errorlevel%"
if %errorlevel% neq 0 (
    echo "Error: git commit command failed."
    exit /b %errorlevel%
)
echo "git commit completed successfully."

:: Push changes to the remote repository and check for errors
echo "Running git push..."
git push origin main
echo "git push executed with errorlevel %errorlevel%"
if %errorlevel% neq 0 (
    echo "Error: git push command failed."
    exit /b %errorlevel%
)
echo "git push completed successfully."

echo "Deployment completed successfully."
endlocal
pause