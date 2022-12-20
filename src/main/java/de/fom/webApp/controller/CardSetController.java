package de.fom.webApp.controller;

import de.fom.webApp.db.entity.CardSet;
import de.fom.webApp.db.repository.CardSetRepository;
import de.fom.webApp.service.CardSetLoaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
public class CardSetController {
    @Autowired
    private CardSetRepository cardSetRepository;
    @Autowired
    private CardSetLoaderService cardSetLoaderService;
    @GetMapping("/api/cardSets")
    public ResponseEntity<Iterable> loadSets(@RequestParam(required = false) String page, @RequestParam(required = false) String pageSize) {

        return new ResponseEntity<>(this.cardSetLoaderService.loadAllCardSets(page, pageSize), HttpStatus.OK);
    }
    @GetMapping("/api/searchCardSets")
    public ResponseEntity<Iterable> searchSets(
            @RequestParam(required = false) String searchParam,
            @RequestParam(required = false) String page,
            @RequestParam(required = false) String tags,
            @RequestParam(required = false) String pageSize
            ) {

        return new ResponseEntity<>(this.cardSetLoaderService.searchCardSets(searchParam, tags, page, pageSize), HttpStatus.OK);
    }

}
