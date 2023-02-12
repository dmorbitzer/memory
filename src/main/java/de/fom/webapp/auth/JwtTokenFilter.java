package de.fom.webapp.auth;

import java.io.IOException;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.filter.OncePerRequestFilter;
public class JwtTokenFilter extends OncePerRequestFilter {

    /**
     * JwtTokenProvider
     */
    private JwtTokenProvider jwtTokenProvider;

    /**
     *
     * @param jwtTokenProvider JwtTokenProvider
     */
    public JwtTokenFilter(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    /**
     *
     * @param httpServletRequest HttpServletRequest
     * @param httpServletResponse HttpServletResponse
     * @param filterChain FilterChain
     * @throws IOException
     * @throws ServletException
     */
    @Override
    protected void doFilterInternal(
            HttpServletRequest httpServletRequest,
            HttpServletResponse httpServletResponse,
            FilterChain filterChain
    ) throws IOException, ServletException {
        String token = jwtTokenProvider.resolveToken(httpServletRequest);
        try {
            if (token != null && jwtTokenProvider.validateToken(token)) {
                Authentication auth = jwtTokenProvider.getAuthentication(token);
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        } catch (AuthException ex) {
            SecurityContextHolder.clearContext();
            httpServletResponse.sendError(
                    ex.getHttpStatus().value(),
                    ex.getMessage()
            );
            return;
        }

        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }
}
