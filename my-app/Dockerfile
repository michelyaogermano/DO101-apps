# 🔨 Etapa 1: Build
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /source

# Copia tudo para o container e restaura dependências
COPY . .
RUN dotnet restore

# Publica em modo Release para pasta /app
RUN dotnet publish -c Release -o /app

# 🏃 Etapa 2: Runtime (imagem leve, sem SDK)
FROM mcr.microsoft.com/dotnet/aspnet:7.0

WORKDIR /app
COPY --from=build /app .

# OpenShift usa UID arbitrária — evite RUN como root
# Define porta padrão (opcional)
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

# Executa o app
CMD ["dotnet", "my-app.dll"]

