package de.fom.webapp.service;

import de.fom.webapp.auth.JwtTokenProvider;
import de.fom.webapp.db.entity.Player;
import de.fom.webapp.db.repository.PlayerRepository;
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
     * PlayerRepository
     */
    private PlayerRepository playerRepository;

    /**
     *
     * @param authenticationManager AuthenticationManager
     * @param jwtTokenProvider JwtTokenProvider
     * @param playerRepository PlayerRepository
     */
    public PlayerAuthService(
            AuthenticationManager authenticationManager,
            JwtTokenProvider jwtTokenProvider,
            PlayerRepository playerRepository
    ) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.playerRepository = playerRepository;
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

            Player player = this.playerRepository
                    .findPlayerByUsername(username);
            if (!player.isActive()) {
                return "USER_NOT_ACTIVE";
            }

            return jwtTokenProvider.createToken(username);
        } catch (AuthenticationException e) {
            return "";
        }
    }
}
