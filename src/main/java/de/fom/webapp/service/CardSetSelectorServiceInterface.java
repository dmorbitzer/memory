package de.fom.webapp.service;

import de.fom.webapp.db.entity.CardSet;

public interface CardSetSelectorServiceInterface {
    /**
     *
     * @param cardSetId String
     * @return CardSet
     */
    CardSet selectCardSetById(
            String cardSetId
    );
}
