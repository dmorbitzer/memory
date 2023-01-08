package de.fom.webapp.controller;

import de.fom.webapp.service.PlayerCreationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * A Controller for authenticating Players
 */
@RestController
public class AuthController {
    /**
     * PlayerCreationCheckService
     */
    private PlayerCreationService playerCreationService;

    /**
     *
     * @param playerCreationService PlayerCreationService
     */
    @Autowired
    public AuthController(
            PlayerCreationService playerCreationService
    ) {
        this.playerCreationService = playerCreationService;
    }

    /**
     *
     * @param username String
     * @param email String
     * @param password String
     * @return ResponseEntity
     */
    @PostMapping("/api/auth/register")
    public ResponseEntity<?> registerPlayer(
            @RequestParam String username,
            @RequestParam String email,
            @RequestParam String password
    ) {
        if (this.playerCreationService.playerEmailExists(email)) {
            return new ResponseEntity<>(
                    "Der Benutzername ist bereits vergeben!",
                    HttpStatus.BAD_REQUEST
            );
        }
        if (this.playerCreationService.playerUsernameExists(username)) {
            return new ResponseEntity<>(
                    "Die Email ist bereits vergeben!",
                    HttpStatus.BAD_REQUEST
            );
        }

        return new ResponseEntity<>(
                this.playerCreationService.createPlayer(
                        username,
                        email,
                        password
                ),
                HttpStatus.OK
        );
    }
}
