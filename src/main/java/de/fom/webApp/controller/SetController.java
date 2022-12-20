package de.fom.webApp.controller;

import de.fom.webApp.db.entity.Card;
import de.fom.webApp.db.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SetController {
    @Autowired
    private CardRepository cardRepository;
    @GetMapping("/api/sets")
    public String loadSets() {
        return "Hello WorldSets";
    }
@GetMapping("/api/newCard")
    public String addCard(){

        this.cardRepository.save(new Card("Name"));
        return "done";
    }
}
