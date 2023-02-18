package de.fom.webapp.service;

import org.springframework.data.domain.PageRequest;

public interface PaginationServiceInterface {
    /**
     *
     * @param page String
     * @param pageSize String
     * @return PageRequest
     */
    PageRequest createPageable(String page, String pageSize);
}
