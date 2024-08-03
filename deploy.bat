@echo off
setlocal

:: Run pkg and check for errors
echo "Running pkg..."
::pkg .
if %errorlevel% neq 0 (
    echo "Error: pkg command failed."
    exit /b %errorlevel%
)
echo "pkg command completed successfully."
pause

:: Add changes to git and check for errors
echo "Running git add..."
git add .
if %errorlevel% neq 0 (
    echo "Error: git add command failed."
    exit /b %errorlevel%
)
echo "git add completed successfully."

:: Commit changes to git and check for errors
echo "Running git commit..."
git commit -m "deploy"
if %errorlevel% neq 0 (
    echo "Error: git commit command failed."
    exit /b %errorlevel%
)
echo "git commit completed successfully."

:: Push changes to the remote repository and check for errors
echo "Running git push..."
git push origin main
if %errorlevel% neq 0 (
    echo "Error: git push command failed."
    exit /b %errorlevel%
)
echo "git push completed successfully."

echo "Deployment completed successfully."
endlocal