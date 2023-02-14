package de.fom.webapp.controller;


import de.fom.webapp.model.request.RegisterRequest;
import de.fom.webapp.model.request.LoginRequest;
import de.fom.webapp.service.PlayerAuthService;
import de.fom.webapp.service.PlayerCreationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
     * PlayerAuthService
     */
    private PlayerAuthService playerAuthService;

    /**
     *
     * @param playerCreationService PlayerCreationService
     * @param playerAuthService PlayerAuthService
     */
    @Autowired
    public AuthController(
            PlayerCreationService playerCreationService,
            PlayerAuthService playerAuthService
    ) {
        this.playerCreationService = playerCreationService;
        this.playerAuthService = playerAuthService;
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

    /**
     *
     * @param loginRequest LoginRequest
     * @return ResponseEntity<?>
     */
    @PostMapping("/api/auth/login")
    public ResponseEntity<?> login(
            @RequestBody LoginRequest loginRequest
            ) {
        String token = playerAuthService.login(
                loginRequest.getUsername(),
                loginRequest.getPassword()
        );

        if (!token.isEmpty()) {
            return new ResponseEntity<>(token, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
}
