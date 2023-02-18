package de.fom.webapp.service;

import de.fom.webapp.db.entity.Player;

public interface PlayerCreationServiceInterface {
    /**
     *
     * @param email String
     * @return boolean
     */
    boolean playerEmailExists(String email);

    /**
     *
     * @param username String
     * @return boolean
     */
    boolean playerUsernameExists(String username);

    /**
     *
     * @param username String
     * @param email String
     * @param password String
     * @return Player
     */
    Player createPlayer(String username, String email, String password);
}
