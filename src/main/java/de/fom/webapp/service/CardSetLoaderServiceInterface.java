package de.fom.webapp.service;

import de.fom.webapp.db.entity.CardSet;
import org.springframework.data.domain.Page;

public interface CardSetLoaderServiceInterface {
    /**
     *
     * @param page String
     * @param pageSize String
     * @return Page<CardSet>
     */
    Page<CardSet> loadAllCardSets(String page, String pageSize);

    /**
     *
     * @param searchParam String
     * @param tags String
     * @param page String
     * @param pageSize String
     * @return Page<CardSet>
     */
    Page<CardSet> searchCardSets(
            String searchParam,
            String tags,
            String page,
            String pageSize
    );
}
