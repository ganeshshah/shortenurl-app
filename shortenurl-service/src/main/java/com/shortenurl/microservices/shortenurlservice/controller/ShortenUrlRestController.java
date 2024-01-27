package com.shortenurl.microservices.shortenurlservice.controller;

import com.shortenurl.microservices.shortenurlservice.models.User;
import com.shortenurl.microservices.shortenurlservice.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/shortenurl-svc-api")
public class ShortenUrlRestController {

//    @Autowired
//    ShortenUrlRestControllerProxy proxy;
    private Map<String, String> urlMap = new HashMap<>();
    @Autowired
    Environment env;

    @Autowired
    UserRepo userDatabase;


    @PostMapping("/shortenurl")
    @CrossOrigin(origins = "http://localhost:3000")
    public Map<String, String> shortenUrl(@RequestBody Map<String, String> request) {
        String originalUrl = request.get("url");
        String shortUrl = generateShortUrl(originalUrl);

        urlMap.put(shortUrl, originalUrl);

        Map<String, String> response = new HashMap<>();
        response.put("originalUrl", originalUrl);
        response.put("shortUrl", shortUrl);
        response.put("port", env.getProperty("local.server.port"));

        User user = new User("1","ganesh","shah","lostinthoughts","password",5000);
        userDatabase.insert(user);

        return response;
    }

//    @PostMapping("/shortenurl-feign")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public Map<String, String> shortenUrl_feign(@RequestBody Map<String, String> request) {
//        return proxy.shortenUrl(request);
//    }

    @GetMapping("/get")
    @CrossOrigin(origins = "http://localhost:3000")
    public String shortenUrl_get_dummy() {
        return "hello world";
    }

    private String generateShortUrl(String originalUrl) {
        // Implement your URL shortening logic here (e.g., using a hashing algorithm)
        // This is a simple example; you may want to use libraries like Apache Commons Codec for hashing.
        return Integer.toHexString(originalUrl.hashCode());
    }
}
