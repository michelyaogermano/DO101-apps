# Etapa 1: Build
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src

COPY *.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o /app --no-restore

# Etapa 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app

COPY --from=build /app .

EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

CMD ["dotnet", "my-app.dll"]
