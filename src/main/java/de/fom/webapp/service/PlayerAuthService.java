package de.fom.webapp.service;

import de.fom.webapp.auth.JwtTokenProvider;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

@Service
public class PlayerAuthService {

    /**
     * AuthenticationManager
     */
    private AuthenticationManager authenticationManager;

    /**
     * JwtTokenProvider
     */
    private JwtTokenProvider jwtTokenProvider;

    /**
     *
     * @param authenticationManager AuthenticationManager
     * @param jwtTokenProvider JwtTokenProvider
     */
    public PlayerAuthService(
            AuthenticationManager authenticationManager,
            JwtTokenProvider jwtTokenProvider
    ) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    /**
     *
     * @param username String
     * @param password String
     * @return String
     */
    public String login(String username, String password) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password)
            );
            System.out.println(authenticationManager.toString());
            return jwtTokenProvider.createToken(username);
        } catch (AuthenticationException e) {
            return "";
        }
    }
}
