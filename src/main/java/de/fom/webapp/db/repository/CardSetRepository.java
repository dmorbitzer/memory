package de.fom.webapp.db.repository;

import de.fom.webapp.db.entity.CardSet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardSetRepository extends JpaRepository<CardSet,Long> {

    Page<CardSet> findByNameContainingIgnoreCase(String searchParam, PageRequest pageable);
    Page<CardSet> findByTagsContainingIgnoreCase(String tags, PageRequest pageable);

    Page<CardSet> findByNameContainingIgnoreCaseAndTagsContainingIgnoreCase(
            String searchParam,
            String tags,
            PageRequest pageable
    );

}

