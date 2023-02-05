package de.fom.webapp.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.GenerationType;

import java.util.Set;

/**
 * The CardPair DB Entity for matching different Cards together
 */
@Entity
public class CardPair {
    /**
     * Long id @GeneratedValue
     */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    /**
     * Set<Card> items
     */
    @OneToMany(mappedBy = "cardPair")
    @JsonIgnore
    private Set<Card> items;

    /**
     *
     * @return Long
     */
    public Long getId() {
        return id;
    }

    /**
     *
     * @param id Long
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     *
     * @return Set<Card>
     */
    public Set<Card> getItems() {
        return items;
    }

    /**
     *
     * @param items Set<Card>
     */
    public void setItems(Set<Card> items) {
        this.items = items;
    }
}
