package de.fom.webapp.auth;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Config class for Spring boot web security
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

    /**
     *
     * @param http HttpSecurity
     * @return SecurityFilterChain
     * @throws Exception
     */
    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http
    ) throws Exception {
        http.csrf().disable();
        http.headers().frameOptions().sameOrigin();
        http
                .authorizeHttpRequests((requests) -> requests
                        .requestMatchers("/api/auth/*").permitAll()
                        //.requestMatchers("/api/*").authenticated()
                        .anyRequest().permitAll()
                );

        return http.build();
    }

    /**
     *
     * @return BCryptPasswordEncoder
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
