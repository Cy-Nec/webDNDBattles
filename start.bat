@echo off
echo Запуск DnDwebBattles...
echo.

REM Проверка наличия node_modules
if not exist "node_modules" (
    echo Установка зависимостей...
    call npm install
    echo.
)

REM Получение локального IP адреса
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4" ^| findstr /v "127.0.0.1" ^| findstr /v "0.0.0.0" ^| findstr /c:"192.168" ^| findstr /c:"10."') do (
    set "LOCAL_IP=%%a"
    goto :got_ip
)
:got_ip
if "%LOCAL_IP%"=="" set "LOCAL_IP=localhost"
set "LOCAL_IP=%LOCAL_IP: =%"

REM Запуск API сервера в фоновом режиме
echo [1/2] Запуск API сервера на порту 3001...
start "DnDwebBattles API" cmd /k "npm run server"
timeout /t 2 /nobreak > nul

REM Запуск frontend
echo [2/2] Запуск frontend на порту 5173...
start "DnDwebBattles Frontend" cmd /k "npm run dev"

echo.
echo ========================================
echo DnDwebBattles запущен!
echo.
echo Открой в браузере:
echo   Локально: https://localhost:5173
echo   В сети:   https://%LOCAL_IP%:5173
echo ========================================
echo.
echo Для остановки закрой окна консоли
echo.
echo ⚠ При первом заходе браузер предупредит о сертификате
echo   — это нормально, нажми "Принять риск" или "Продолжить"
echo ========================================
echo.
pause
