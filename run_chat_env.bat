@echo off
echo 🧠 Стартирам локален чат бот с Gemma-2B...
cd /d "C:\Users\Stella Barbarella\MyProjects\stella-projects-final\gemma-2b"

start "" cmd /k "python chat_api.py"

cd /d "C:\Users\Stella Barbarella\MyProjects\stella-projects-final"
start "" cmd /k "python -m http.server 8000"

timeout /t 3 >nul
start http://localhost:8000/chat.html
