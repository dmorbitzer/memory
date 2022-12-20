package de.fom.webApp.db.repository;

import de.fom.webApp.db.entity.Card;
import org.springframework.data.repository.CrudRepository;

public interface CardRepository extends CrudRepository<Card, Long> {

}
