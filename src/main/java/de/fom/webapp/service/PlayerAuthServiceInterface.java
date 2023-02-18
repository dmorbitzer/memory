package de.fom.webapp.service;

public interface PlayerAuthServiceInterface {
    /**
     *
     * @param username String
     * @param password String
     * @return String
     */
    String login(String username, String password);
}
