#!/bin/bash

# Detener NGINX y NGROK
sudo systemctl stop nginx
killall ngrok

# Actualizar el repositorio
git pull
nvm use 16
npm i
npm run build

# Iniciar NGINX
sudo systemctl start nginx

# Generar URL de NGROK
ngrok http 80 > /dev/null &

# Esperar unos segundos para que NGROK se inicie completamente
sleep 5

# Obtener y mostrar la URL de NGROK
ngrok_url=$(curl -s http://localhost:4040/api/tunnels | jq -r '.tunnels[0].public_url')
echo "La URL de NGROK es: $ngrok_url"
