package de.fom.webapp.auth;

import org.springframework.http.HttpStatus;
public class AuthException extends RuntimeException {

    /**
     * long
     */
    private static final long serialVersionUID = 1L;

    /**
     * String
     */
    private  String message;

    /**
     * HttpStatus
     */
    private  HttpStatus httpStatus;

    /**
     *
     * @param message String
     * @param httpStatus HttpStatus
     */
    public AuthException(String message, HttpStatus httpStatus) {
        this.message = message;
        this.httpStatus = httpStatus;
    }

    /**
     *
     * @return String
     */
    @Override
    public String getMessage() {
        return message;
    }

    /**
     *
     * @return HttpStatus
     */
    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

}
