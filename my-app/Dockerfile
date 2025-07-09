FROM mcr.microsoft.com/dotnet/aspnet:7.0

WORKDIR /app

# Copia os arquivos publicados do projeto .NET
COPY /bin/Release/net7.0/publish/ .

# Inicia o aplicativo
CMD ["dotnet", "my-app.dll"]
