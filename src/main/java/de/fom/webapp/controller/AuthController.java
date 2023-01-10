package de.fom.webapp.controller;

import de.fom.webapp.models.RegisterRequest;
import de.fom.webapp.service.PlayerCreationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
            @RequestBody RegisterRequest registerRequest
            ) {
        System.out.println("Nicht so tief Rüdiger");
        if (this.playerCreationService.playerEmailExists(registerRequest.getEmail())) {
            return new ResponseEntity<>(
                    "Die Email ist bereits vergeben!",
                    HttpStatus.CONFLICT
            );
        }
        if (this.playerCreationService.playerUsernameExists(registerRequest.getUsername())) {
            return new ResponseEntity<>(
                    "Der Benutzername ist bereits vergeben!",
                    HttpStatus.CONFLICT
            );
        }

        return new ResponseEntity<>(
                this.playerCreationService.createPlayer(
                        registerRequest.getUsername(),
                        registerRequest.getEmail(),
                        registerRequest.getPassword()
                ),
                HttpStatus.OK
        );
    }
}
