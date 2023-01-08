package de.fom.webapp.db.repository;

import de.fom.webapp.db.entity.Player;
import org.springframework.data.repository.CrudRepository;

/**
 * Repository for the Player Entity
 */
public interface PlayerRepository extends CrudRepository<Player, Long> {
    /**
     *
     * @param email String
     * @return Player
     */
     Player findPlayerByEmail(String email);

    /**
     *
     * @param username String
     * @return Player
     */
    Player findPlayerByUsername(String username);
}
