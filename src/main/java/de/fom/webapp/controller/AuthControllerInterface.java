package de.fom.webapp.controller;

import de.fom.webapp.model.request.LoginRequest;
import de.fom.webapp.model.request.RegisterRequest;
import org.springframework.http.ResponseEntity;

public interface AuthControllerInterface {
    /**
     *
     * @param loginRequest LoginRequest
     * @return ResponseEntity
     */
    ResponseEntity<?> login(LoginRequest loginRequest);

    /**
     *
     * @param registerRequest RegisterRequest
     * @return ResponseEntity
     */
    ResponseEntity<?> registerPlayer(RegisterRequest registerRequest);
}
