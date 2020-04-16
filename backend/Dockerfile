FROM mcr.microsoft.com/dotnet/core/sdk:3.1 as build-env

WORKDIR /app/backend


COPY Twitterish.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app/backend
COPY --from=build-env /app/backend/out .

ENTRYPOINT ["dotnet", "Twitterish.dll"]