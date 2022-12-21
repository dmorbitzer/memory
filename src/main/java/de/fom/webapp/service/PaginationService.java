package de.fom.webapp.service;

import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class PaginationService {
    static final int DEFAULT_PAGE_SIZE = 10;

    public PageRequest createPageable(String page, String pageSize) {
        int pageNumber = this.numberParser(page);
        int pageSizeNumber = this.numberParser(pageSize);

        if(pageSizeNumber == 0) pageSizeNumber = DEFAULT_PAGE_SIZE;

        return PageRequest.of(pageNumber, pageSizeNumber);
    }

    public int numberParser(String stringNumber) {
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
