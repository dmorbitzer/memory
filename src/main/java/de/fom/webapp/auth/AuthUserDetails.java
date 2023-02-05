package de.fom.webapp.auth;

import de.fom.webapp.db.entity.Player;
import de.fom.webapp.db.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class AuthUserDetails implements UserDetailsService {

    /**
     * PlayerRepository
     */
    private final PlayerRepository playerRepository;

    /**
     *
     * @param playerRepository PlayerRepository
     */
    @Autowired
    public AuthUserDetails(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    /**
     *
     * @param username String the username identifying
     *                 the user whose data is required.
     * @return UserDetails
     * @throws UsernameNotFoundException
     */
    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        final Player appUser = playerRepository.findPlayerByUsername(username);

        if (appUser == null) {
            throw new UsernameNotFoundException(
                    "User '" + username + "' not found"
            );
        }

        return org.springframework.security.core.userdetails.User
                .withUsername(username)
                .password(appUser.getPassword())
                .accountExpired(false)
                .accountLocked(false)
                .credentialsExpired(false)
                .disabled(false)
                .roles("USER")
                .build();
    }
}
