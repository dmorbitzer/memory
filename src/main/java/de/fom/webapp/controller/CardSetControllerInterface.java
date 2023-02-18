package de.fom.webapp.controller;

import de.fom.webapp.model.request.LoadSetsRequest;
import de.fom.webapp.model.request.SearchSetsRequest;
import org.springframework.http.ResponseEntity;

public interface CardSetControllerInterface {
    /**
     *
     * @param loadSetsRequest LoadSetsRequest
     * @return ResponseEntity
     */
    ResponseEntity<?> loadSets(LoadSetsRequest loadSetsRequest);

    /**
     *
     * @param searchSetsRequest SearchSetsRequest
     * @return ResponseEntity
     */
    ResponseEntity<?> searchSets(SearchSetsRequest searchSetsRequest);
}
