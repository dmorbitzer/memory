package de.fom.webapp.db.repository;

import de.fom.webapp.db.entity.Card;
import org.springframework.data.repository.CrudRepository;

/**
 * Repository for the Card Entity
 */
public interface CardRepository extends CrudRepository<Card, Long> {

}
