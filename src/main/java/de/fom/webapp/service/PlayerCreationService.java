package de.fom.webapp.service;

import de.fom.webapp.db.entity.Player;
import de.fom.webapp.db.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * A Service for checking if a User can be created
 */
@Service
public class PlayerCreationService {
    /**
     * PlayerRepository
     */
    private PlayerRepository playerRepository;

    /**
     * PasswordEncoder
     */
    private PasswordEncoder passwordEncoder;

    /**
     *
     * @param playerRepository PlayerRepository
     * @param passwordEncoder PasswordEncoder
     */
    @Autowired
    public PlayerCreationService(
            PlayerRepository playerRepository,
            PasswordEncoder passwordEncoder
    ) {
        this.playerRepository = playerRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     *
     * @param email String
     * @return boolean
     */
    public boolean playerEmailExists(String email) {
        Player player = this.playerRepository.findPlayerByEmail(email);
        if (player == null) {
            return false;
        }
        return true;
    }

    /**
     *
     * @param username String
     * @return boolean
     */
    public boolean playerUsernameExists(String username) {
        Player player = this.playerRepository.findPlayerByUsername(username);
        if (player == null) {
            return false;
        }
        return true;
    }

    /**
     *
     * @param username String
     * @param email String
     * @param password String
     * @return Player
     */
    public Player createPlayer(String username, String email, String password) {
        Player player = new Player();
        player.setActive(false);
        player.setEmail(email);
        player.setUsername(username);
        player.setPassword(this.passwordEncoder.encode(password));
        return playerRepository.save(player);
    }
}
