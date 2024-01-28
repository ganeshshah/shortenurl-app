# URL Shortening Application
A web app to shorten url. Web app is developed using microservice architecture

### Tech Stacks
ReactJs
TailwindCss
SpringBoot
Spring cloud
MongoDB

### Ports Used by each service
| Microservices            | Ports used  |
|--------------------------|-------------|
| `authentication-service (Keycloak)` | 8050 |
| `eureka-server`          | 8100        |
| `shortenurl-api-gateway` | 8200        |
| `shortenurl-service`     | 8300-8350   |
| `database-service`       | 8351-8400   |
| `shortenurl-ui`          | 3000-3050   |
