package com.shortenurl.microservices.shortenurlservice.repository;

import com.shortenurl.microservices.shortenurlservice.models.User;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends MongoRepository<User, String> {



}