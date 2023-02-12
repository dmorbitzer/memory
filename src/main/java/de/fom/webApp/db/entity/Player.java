package de.fom.webapp.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.GenerationType;

/**
 * The Player DB Entity
 */
@Entity
public class Player {
    /**
     * Long id @GeneratedValue
     */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    /**
     * String username
     */
    private String username;

    /**
     * String password
     */
    @JsonIgnore
    private String password;

    /**
     * String email
     */
    private String email;

    /**
     * boolean isActive
     */
    private boolean isActive;

    /**
     *
     * @return Long
     */
    public Long getId() {
        return id;
    }

    /**
     *
     * @param id Long
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     *
     * @return String
     */
    public String getUsername() {
        return username;
    }

    /**
     *
     * @param username String
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     *
     * @return String
     */
    public String getPassword() {
        return password;
    }

    /**
     *
     * @param password String
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     *
     * @return String
     */
    public String getEmail() {
        return email;
    }

    /**
     *
     * @param email String
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     *
     * @return boolean
     */
    public boolean isActive() {
        return isActive;
    }

    /**
     *
     * @param active boolean
     */
    public void setActive(boolean active) {
        isActive = active;
    }
}
