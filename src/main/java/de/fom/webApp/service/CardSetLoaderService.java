package de.fom.webApp.service;

import de.fom.webApp.db.entity.Card;
import de.fom.webApp.db.entity.CardSet;
import de.fom.webApp.db.repository.CardSetRepository;
import org.hibernate.cfg.annotations.reflection.internal.XMLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CardSetLoaderService {
    static final int DEFAULT_PAGE_SIZE = 10;
    @Autowired
    private CardSetRepository cardSetRepository;
    public Page<CardSet> loadAllCardSets(String page, String pageSize) {

        PageRequest pageRequest = this.createPageable(page,pageSize);

        return this.cardSetRepository.findAll(pageRequest);
    }

    public Page<CardSet> searchCardSets(
            String searchParam,
            String tags,
            String page,
            String pageSize
    ) {
        Page<CardSet> result = new PageImpl<CardSet>(new ArrayList<CardSet>());

        PageRequest pageRequest = this.createPageable(page, pageSize);

        if (
                searchParam != null &&
                        tags != null &&
                        searchParam.length() > 0 &&
                        tags.length() > 0
        ) {
            result = this.cardSetRepository.findByNameContainingIgnoreCaseAndTagsContainingIgnoreCase(
                    searchParam,
                    tags,
                    pageRequest
            );
        } else if (searchParam != null && searchParam.length() > 0) {
            result = this.cardSetRepository.findByNameContainingIgnoreCase(
                    searchParam,
                    pageRequest
            );
        } else if (tags != null && tags.length() > 0) {
            result = this.cardSetRepository.findByTagsContainingIgnoreCase(
                    tags,
                    pageRequest
            );
        }

        return result;
    }


    private PageRequest createPageable(String page, String pageSize) {
        int pageNumber = this.numberParser(page);
        int pageSizeNumber = this.numberParser(pageSize);

        if(pageSizeNumber == 0) pageSizeNumber = DEFAULT_PAGE_SIZE;

        return PageRequest.of(pageNumber, pageSizeNumber);
    }

    private int numberParser(String stringNumber) {
        int number;

        try {
            number = Integer.parseInt(stringNumber);
        } catch (NumberFormatException e) {
            number = 0;
        }

        if (number < 0) {
            number = 0;
        }

        return number;
    }

}

