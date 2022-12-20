package de.fom.webApp.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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

    @ManyToMany(fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Card> pair = new HashSet<>();

    @ManyToMany(mappedBy = "cards")
    @JsonIgnore
    private Set<CardSet> cardSet = new HashSet<>();

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

    public Set<Card> getPair() {
        return pair;
    }

    public void setPair(Set<Card> pair) {
        this.pair = pair;
    }

    public Set<CardSet> getCardSet() {
        return cardSet;
    }

    public void setCardSet(Set<CardSet> cardSet) {
        this.cardSet = cardSet;
    }
}
