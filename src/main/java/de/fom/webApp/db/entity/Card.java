package de.fom.webApp.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String mediaType;
    private String mediaPath;

    @ManyToMany(mappedBy = "cards")
    @JsonIgnore
    private Set<CardSet> cardSet = new HashSet<>();

    @ManyToOne
    private CardPair cardPair;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMediaType() {
        return mediaType;
    }

    public void setMediaType(String mediaType) {
        this.mediaType = mediaType;
    }

    public String getMediaPath() {
        return mediaPath;
    }

    public void setMediaPath(String mediaPath) {
        this.mediaPath = mediaPath;
    }

    public Set<CardSet> getCardSet() {
        return cardSet;
    }

    public void setCardSet(Set<CardSet> cardSet) {
        this.cardSet = cardSet;
    }

    public long getCardPair() {
        return cardPair.getId();
    }

    public CardPair getCardPairObject() {
        return cardPair;
    }

    public void setCardPair(CardPair cardPair) {
        this.cardPair = cardPair;
    }
}
