package de.fom.webapp.auth;

import java.util.Base64;
import java.util.Date;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtTokenProvider {
    /**
     * String
     */
    @Value("${security.jwt.token.secret-key:secret-key}")
    private String secretKey;

    /**
     * long
     */
    @Value("${security.jwt.token.expire-length:3600000}")
    private long validityInMilliseconds;

    /**
     * AuthUserDetails
     */
    @Autowired
    private AuthUserDetails myUserDetails;

    /**
     * Set secret Key
     */
    @PostConstruct
    protected void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    /**
     *
     * @param username String
     * @return String
     */
    public String createToken(String username) {

        Claims claims = Jwts.claims().setSubject(username);

        Date now = new Date();
        Date validity = new Date(now.getTime() + validityInMilliseconds);

        return Jwts.builder()//
                .setClaims(claims)//
                .setIssuedAt(now)//
                .setExpiration(validity)//
                .signWith(SignatureAlgorithm.HS256, secretKey)//
                .compact();
    }

    /**
     *
     * @param token String
     * @return Authentication
     */
    public Authentication getAuthentication(String token) {
        UserDetails userDetails = myUserDetails
                .loadUserByUsername(getUsername(token));
        return new UsernamePasswordAuthenticationToken(
                userDetails,
                "",
                userDetails.getAuthorities()
        );
    }

    /**
     *
     * @param token String
     * @return String
     */
    public String getUsername(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    /**
     *
     * @param request HttpServletRequest
     * @return String
     */
    public String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null) {
            return bearerToken;
        }
        return null;
    }

    /**
     *
     * @param token String
     * @return boolean
     */
    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            throw new AuthException(
                    "Expired or invalid JWT token",
                    HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
