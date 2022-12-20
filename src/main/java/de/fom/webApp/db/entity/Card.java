package de.fom.webApp.db.entity;

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

    @ManyToMany
    private Set<Card> pair = new HashSet<>();

    public Card(String name) {
        this.name = name;
    }
}
