package de.fom.webapp.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import java.util.HashSet;
import java.util.Set;

/**
 * The Card DB Entity
 */
@Entity
public class Card {
    /**
     * Long id @GeneratedValue
     */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    /**
     * String name
     */
    private String name;

    /**
     * String mediaType
     */
    private String mediaType;

    /**
     * String mediaPath
     */
    private String mediaPath;

    /**
     * Set<CardSet> cardSet
     */
    @ManyToMany(mappedBy = "cards")
    @JsonIgnore
    private Set<CardSet> cardSet = new HashSet<>();

    /**
     * CardPair cardPair
     */
    @ManyToOne
    private CardPair cardPair;

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
    public void setId(final Long id) {
        this.id = id;
    }

    /**
     *
     * @return String
     */
    public String getName() {
        return name;
    }

    /**
     *
     * @param name String
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     *
     * @return String
     */
    public String getMediaType() {
        return mediaType;
    }

    /**
     *
     * @param mediaType String
     */
    public void setMediaType(String mediaType) {
        this.mediaType = mediaType;
    }

    /**
     *
     * @return String
     */
    public String getMediaPath() {
        return mediaPath;
    }

    /**
     *
     * @param mediaPath String
     */
    public void setMediaPath(String mediaPath) {
        this.mediaPath = mediaPath;
    }

    /**
     *
     * @return Set<CardSet>
     */
    public Set<CardSet> getCardSet() {
        return cardSet;
    }

    /**
     *
     * @param cardSet Set<CardSet>
     */
    public void setCardSet(Set<CardSet> cardSet) {
        this.cardSet = cardSet;
    }

    /**
     *
     * @return CardPair
     */
    public CardPair getCardPair() {
        return cardPair;
    }

    /**
     *
     * @param cardPair CardPair
     */
    public void setCardPair(CardPair cardPair) {
        this.cardPair = cardPair;
    }
}
