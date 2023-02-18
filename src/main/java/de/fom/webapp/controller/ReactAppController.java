package de.fom.webapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReactAppController implements ReactAppControllerInterface {
    /**
     *
     * @return String
     */
    @RequestMapping(
            value = {
                    "/",
                    "/{x:[\\w\\-]+}",
                    "/{x:^(?!api$).*$}/**/{y:[\\w\\-]+}"
            })
    public String getIndex() {
        return "/index.html";
    }
}
