package de.fom.webapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Start the Web application.
 */
@SpringBootApplication
public class MemoryApplication {

    /**
     * @param args Arguments
     */
    public static void main(final String[] args) {
        System.setProperty("server.servlet.context-path", "/webapp");
        SpringApplication.run(MemoryApplication.class, args);
    }

}
