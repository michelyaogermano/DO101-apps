# ===============================
# 🔨 Etapa 1 — Build (com SDK)
# ===============================
FROM mcr.microsoft.com/dotnet/sdk:7.0

# Cria diretório de trabalho
WORKDIR /src

# Copia csproj e restaura as dependências primeiro (cache eficiente)
COPY *.csproj ./
RUN dotnet restore

# Copia o restante do código
COPY . ./

# Publica a aplicação para produção
RUN dotnet publish -c Release -o /app --no-restore

# ===============================
# 🏃 Etapa 2 — Runtime (imagem leve)
# ===============================
FROM mcr.microsoft.com/dotnet/aspnet:7.0

# Define pasta de trabalho
WORKDIR /app

# Copia a aplicação publicada da etapa anterior
COPY --from=build /app .

# Define a porta padrão (OpenShift escuta na 8080 por padrão)
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

# Inicia o app
CMD ["dotnet", "my-app.dll"]

