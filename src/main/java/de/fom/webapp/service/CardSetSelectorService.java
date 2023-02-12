package de.fom.webapp.service;

import de.fom.webapp.db.entity.CardSet;
import de.fom.webapp.db.repository.CardSetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.LinkedList;
import java.util.List;

@Service
public class CardSetSelectorService {
    /**
     * CardSetRepository cardSetRepository
     */
    private final CardSetRepository cardSetRepository;
    /**
     * PaginationService paginationService
     */
    private final PaginationService paginationService;
    /**
     *
     * @param cardSetRepository CardSetRepository
     * @param paginationService PaginationService
     */
    @Autowired
    public CardSetSelectorService(
            CardSetRepository cardSetRepository,
            PaginationService paginationService
    ) {
        this.cardSetRepository = cardSetRepository;
        this.paginationService = paginationService;
    }

    /**
     * @param cardSetId String
     * @return List<CardSet>
     */
    public CardSet selectCardSetById(
            String cardSetId
    ) {
        // function variables
        long cardSetIdNumber = this.paginationService.numberParser(cardSetId);

        List<CardSet> cardSets = this.cardSetRepository.findAll();

        List<Long> ids = new LinkedList<Long>();

        boolean validCardSetId;

        CardSet result;
        // Gets a list of all the ids in the data
        for (int i = 0; i < cardSets.size(); i++) {
           ids.add(cardSets.get(i).getId());
        }

        /* check if the given cardSetIdNumber is valid
        * since paginationService.numberParser will return zero,
        * when ever the function input is not a Number
        * and zero is not a valid id for the cardSets it is sufficient
        * to only check whether the cardSetIdNumber
        * is within the list of ids.
        */
        validCardSetId = ids.contains(cardSetIdNumber);

        if (validCardSetId) {
            result = this.cardSetRepository.findById(
                    cardSetId
            );
        } else {
            result = new CardSet();
        }

        return result;
    }
}
