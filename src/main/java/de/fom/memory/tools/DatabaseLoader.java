package de.fom.memory.tools;

import de.fom.memory.entity.Card;
import de.fom.memory.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final CardRepository cardRepository;

    @Autowired
    public DatabaseLoader(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        Card cardOne = new Card("Test 1", "text");
        Card cardTwo = new Card("Test 2", "text");
    }
}
