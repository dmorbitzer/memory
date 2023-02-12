package de.fom.webapp.model.request;

/**
 * A Request Model for the Login Controller
 */
public class LoginRequest {
    /**
     * String
     */
    private String username;
    /**
     * String
     */
    private String password;

    /**
     *
     * @return String
     */
    public String getUsername() {
        return username;
    }

    /**
     *
     * @return String
     */
    public String getPassword() {
        return password;
    }
}
