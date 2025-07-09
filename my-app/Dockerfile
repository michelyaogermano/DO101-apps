FROM registry.access.redhat.com/ubi8/dotnet-70-runtime:latest

ADD /bin/Release/net7.0/publish/ .

CMD ["dotnet", "my-app.dll"]
