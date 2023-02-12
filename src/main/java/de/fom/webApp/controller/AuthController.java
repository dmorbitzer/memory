package de.fom.webapp.controller;

import de.fom.webapp.model.request.RegisterRequest;
import de.fom.webapp.service.PlayerCreationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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
     * @param registerRequest RegisterRequest
     * @return ResponseEntity
     */
    @PostMapping("/api/auth/register")
    public ResponseEntity<?> registerPlayer(
            @RequestBody RegisterRequest registerRequest
            ) {
        if (this.playerCreationService.playerEmailExists(
                registerRequest.getEmail()
        )) {
            return new ResponseEntity<>(
                    "The Email is already in use!",
                    HttpStatus.CONFLICT
            );
        }
        if (this.playerCreationService.playerUsernameExists(
                registerRequest.getUsername())
        ) {
            return new ResponseEntity<>(
                    "The Username is already in use!",
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
