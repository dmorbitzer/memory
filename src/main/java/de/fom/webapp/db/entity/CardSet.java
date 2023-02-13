package de.fom.webapp.db.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.ManyToMany;
import java.util.HashSet;
import java.util.Set;

@Entity
public class CardSet {
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
     * String tags
     */
    private String tags;

    /**
     * String preview_image_url
     */
    private String previewImageUrl;

    /**
     * Set<Card> cards
     */
    @ManyToMany
    private Set<Card> cards = new HashSet<>();

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
    public String getTags() {
        return tags;
    }

    /**
     *
     * @param tags String
     */
    public void setTags(String tags) {
        this.tags = tags;
    }

    /**
     *
     * @return String
     */
    public String getPreviewImageUrl() {
        return previewImageUrl;
    }

    /**
     *
     * @param previewImageUrl String
     */
    public void setPreviewImageUrl(String previewImageUrl) {
        this.previewImageUrl = previewImageUrl;
    }

    /**
     *
     * @return Set<Card>
     */
    public Set<Card> getCards() {
        return cards;
    }

    /**
     *
     * @param cards Set<Card>
     */
    public void setCards(Set<Card> cards) {
        this.cards = cards;
    }
}
