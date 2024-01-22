package com.shortenurl.microservices.shortenurlapigateway;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ShortenUrlApiGatewayConfig {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("path_route", r -> r.path("/get")
                        .uri("http://httpbin.org"))
                .route(r -> r.path("/shortenurl-svc-api/**")
                        .uri("lb://shortenurl-service"))
                .build();
    }
    

}
