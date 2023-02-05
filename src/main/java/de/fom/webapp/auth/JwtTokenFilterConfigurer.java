package de.fom.webapp.auth;

import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
public class JwtTokenFilterConfigurer extends
        SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {

    /**
     * JwtTokenProvider
     */
    private JwtTokenProvider jwtTokenProvider;

    /**
     *
     * @param jwtTokenProvider JwtTokenProvider
     */
    public JwtTokenFilterConfigurer(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    /**
     *
     * @param http HttpSecurity
     * @throws Exception
     */
    @Override
    public void configure(HttpSecurity http) throws Exception {
        JwtTokenFilter customFilter = new JwtTokenFilter(jwtTokenProvider);
        http.addFilterBefore(
                customFilter,
                UsernamePasswordAuthenticationFilter.class
        );
    }

}
