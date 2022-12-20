package de.fom.webApp.db.entity;

import jakarta.persistence.*;
import net.minidev.json.annotate.JsonIgnore;

import java.util.Set;

@Entity
public class CardPair {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany(mappedBy="cardPair")
    @JsonIgnore
    private Set<Card> items;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<Card> getItems() {
        return items;
    }

    public void setItems(Set<Card> items) {
        this.items = items;
    }
}
