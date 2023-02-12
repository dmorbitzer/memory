package de.fom.webapp.service;

import de.fom.webapp.db.entity.CardSet;
import de.fom.webapp.db.repository.CardSetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        try {
            return this.cardSetRepository.findById(cardSetId);
        } catch (Exception e) {
            return null;
       }
    }
}
