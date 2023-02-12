package de.fom.webapp.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReactAppController {
    /**
     *
     * @param request HttpServletRequest
     * @return String
     */
    @RequestMapping(
            value = {
                    "/",
                    "/{x:[\\w\\-]+}",
                    "/{x:^(?!api$).*$}/**/{y:[\\w\\-]+}"
            }
            )
    public String getIndex(HttpServletRequest request) {
        return "/index.html";
    }
}
