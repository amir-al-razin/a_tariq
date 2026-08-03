package com.tariq.api.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * Represents an individual lesson within a chapter containing targeted pedagogical exercises and content.
 */
@Entity
@Table(name = "curriculum_lessons")
public class Lesson {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "order_number", nullable = false)
    private Integer orderNumber;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "title_arabic")
    private String titleArabic;

    @Column(name = "description", length = 1500)
    private String description;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "chapter_id", nullable = false)
    @JsonIgnore
    private Chapter chapter;

    @OneToMany(mappedBy = "lesson", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @Fetch(FetchMode.SUBSELECT)
    @OrderBy("sequenceNumber ASC")
    private List<CurriculumChunk> chunks = new ArrayList<>();

    public Lesson() {
    }

    public Lesson(Integer orderNumber, String title, String titleArabic, String description, Chapter chapter) {
        this.orderNumber = orderNumber;
        this.title = title;
        this.titleArabic = titleArabic;
        this.description = description;
        this.chapter = chapter;
    }

    public void addChunk(CurriculumChunk chunk) {
        chunks.add(chunk);
        chunk.setLesson(this);
    }

    public void removeChunk(CurriculumChunk chunk) {
        chunks.remove(chunk);
        chunk.setLesson(null);
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(Integer orderNumber) {
        this.orderNumber = orderNumber;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitleArabic() {
        return titleArabic;
    }

    public void setTitleArabic(String titleArabic) {
        this.titleArabic = titleArabic;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Chapter getChapter() {
        return chapter;
    }

    public void setChapter(Chapter chapter) {
        this.chapter = chapter;
    }

    public List<CurriculumChunk> getChunks() {
        return chunks;
    }

    public void setChunks(List<CurriculumChunk> chunks) {
        this.chunks = chunks;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Lesson lesson = (Lesson) o;
        return Objects.equals(id, lesson.id) && Objects.equals(orderNumber, lesson.orderNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, orderNumber);
    }

    @Override
    public String toString() {
        return "Lesson{" +
                "id=" + id +
                ", orderNumber=" + orderNumber +
                ", title='" + title + '\'' +
                '}';
    }
}
