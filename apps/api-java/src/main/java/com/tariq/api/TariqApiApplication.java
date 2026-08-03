package com.tariq.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * Esho Arbi Shikhi Headless CMS & Quranic Arabic Curriculum Progress API.
 * Spring Boot Application main entry point.
 */
@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.tariq.api.repository")
@EnableTransactionManagement
public class TariqApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(TariqApiApplication.class, args);
    }
}
