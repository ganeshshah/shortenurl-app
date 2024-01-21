package com.shortenurl.microservices.shortenurlservice.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ShortenUrlRestController {
    private Map<String, String> urlMap = new HashMap<>();

    @PostMapping("/shortenurl")
    public Map<String, String> shortenUrl(@RequestBody Map<String, String> request) {
        String originalUrl = request.get("url");
        String shortUrl = generateShortUrl(originalUrl);

        urlMap.put(shortUrl, originalUrl);

        Map<String, String> response = new HashMap<>();
        response.put("originalUrl", originalUrl);
        response.put("shortUrl", shortUrl);

        return response;
    }

    private String generateShortUrl(String originalUrl) {
        // Implement your URL shortening logic here (e.g., using a hashing algorithm)
        // This is a simple example; you may want to use libraries like Apache Commons Codec for hashing.
        return Integer.toHexString(originalUrl.hashCode());
    }
}
