package com.AssetRegisterBook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;




 import org.springframework.data.couchbase.repository.config.EnableCouchbaseRepositories;


@EnableCouchbaseRepositories 
@ComponentScan({"com.AssetRegisterBook.*"})
@SpringBootApplication
public class AssetRegisterBook extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(AssetRegisterBook.class);
    }

	public static void main(String[] args) {
		SpringApplication.run(AssetRegisterBook.class, args);
	}
 }
