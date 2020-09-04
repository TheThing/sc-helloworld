@ECHO off
SETLOCAL EnableDelayedExpansion

ECHO.
set /p version="Print version you wanna publish: "
ECHO.
ECHO npm version !version!
npm version !version!
ECHO git push
git push
ECHO.
