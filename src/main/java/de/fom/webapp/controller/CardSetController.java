package de.fom.webapp.controller;

import de.fom.webapp.db.entity.CardSet;
import de.fom.webapp.model.request.CardSetIdRequest;
import de.fom.webapp.model.request.LoadSetsRequest;
import de.fom.webapp.model.request.SearchSetsRequest;
import de.fom.webapp.service.CardSetLoaderService;
import de.fom.webapp.service.CardSetSelectorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

/**
 * A Controller for loading and searching/filtering CardSets.
 */
@RestController
public class CardSetController {
    /**
     * CardSetLoaderService Object.
     */
    private final CardSetLoaderService cardSetLoaderService;

    /**
     * CardSetSelectorService Object
     */
    private final CardSetSelectorService cardSetSelectorService;

    /**
     *
     * @param cardSetLoaderService CardSetLoader
     * @param cardSetSelectorService CardSetSelectorService
     */
    @Autowired
    public CardSetController(
            CardSetLoaderService cardSetLoaderService,
            CardSetSelectorService cardSetSelectorService
            ) {
        this.cardSetLoaderService = cardSetLoaderService;
        this.cardSetSelectorService = cardSetSelectorService;
    }

    /**
     *
     * @param loadSetsRequest LoadSetsRequest
     * @return ResponseEntity<Iterable>
     */
    @PostMapping("/api/cardSets")
    public ResponseEntity<Iterable> loadSets(
            @RequestBody LoadSetsRequest loadSetsRequest
            ) {

        return new ResponseEntity<>(
                this.cardSetLoaderService.loadAllCardSets(
                        loadSetsRequest.getPage(),
                        loadSetsRequest.getPageSize()
                ),
                HttpStatus.OK
        );
    }

    /**
     *
     * @param searchSetsRequest SearchSetsRequest
     * @return ResponseEntity<Iterable>
     */
    @GetMapping("/api/searchCardSets")
    public ResponseEntity<Iterable> searchSets(
            @RequestBody SearchSetsRequest searchSetsRequest
            ) {

        return new ResponseEntity<>(
                this.cardSetLoaderService.searchCardSets(
                        searchSetsRequest.getSearchParam(),
                        searchSetsRequest.getTags(),
                        searchSetsRequest.getPage(),
                        searchSetsRequest.getPageSize()
                ),
                HttpStatus.OK
        );
    }

    /**
     *
     * @param cardSetIdRequest Parameter for selection
     * @return ResponseEntity<CardSet>
     */
    @GetMapping("/api/selectCardSet")
    public ResponseEntity<CardSet> selectSetById(
            @RequestBody CardSetIdRequest cardSetIdRequest
    ) {
        CardSet response = this.cardSetSelectorService.selectCardSetById(
                cardSetIdRequest.getCardSetId()
        );

        ResponseEntity<CardSet> result;

        if (Objects.isNull(response)) {
            result = new ResponseEntity<>(
                    response,
                    HttpStatus.NOT_FOUND
            );
        } else {
            result = new ResponseEntity<>(
                    response,
                    HttpStatus.OK
            );
        }

        return  result;
    }
}
