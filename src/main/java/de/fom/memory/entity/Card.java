package de.fom.memory.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Card {
    @Id
    @GeneratedValue
    private Long id;
    private String front;
    private String frontType;

    public Card(String front, String frontType) {
        this.front = front;
        this.frontType = frontType;
    }

    public Card() {

    }

    public void setId(Long id) {
        this.id = id;
    }

    @Id
    public Long getId() {
        return id;
    }

    public String getFront() {
        return front;
    }

    public void setFront(String front) {
        this.front = front;
    }

    public String getFrontType() {
        return frontType;
    }

    public void setFrontType(String frontType) {
        this.frontType = frontType;
    }
}
