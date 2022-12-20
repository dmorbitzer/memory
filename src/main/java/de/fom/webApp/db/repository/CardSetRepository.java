package de.fom.webApp.db.repository;

import de.fom.webApp.db.entity.CardSet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CardSetRepository extends JpaRepository<CardSet,Long> {

    Page<CardSet> findByNameContainingIgnoreCase(String searchParam, PageRequest pageable);
    Page<CardSet> findByTagsContainingIgnoreCase(String tags, PageRequest pageable);

    Page<CardSet> findByNameContainingIgnoreCaseAndTagsContainingIgnoreCase(
            String searchParam,
            String tags,
            PageRequest pageable
    );

}

