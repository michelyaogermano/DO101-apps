# 🔨 Etapa 1: Build
FROM mcr.microsoft.com/dotnet/sdk:7.0

WORKDIR /source

# Copia tudo para o container e restaura dependências
COPY . .
RUN dotnet restore

# Publica em modo Release para pasta /app
RUN dotnet publish -c Release -o /app

