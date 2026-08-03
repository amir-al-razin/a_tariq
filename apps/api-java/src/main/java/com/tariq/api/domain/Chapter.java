package com.tariq.api.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * Represents a logical unit or chapter within a Volume of Esho Arbi Shikhi.
 */
@Entity
@Table(name = "curriculum_chapters")
public class Chapter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "chapter_number", nullable = false)
    private Integer chapterNumber;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "title_arabic")
    private String titleArabic;

    @Column(name = "description", length = 1000)
    private String description;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "volume_id", nullable = false)
    @JsonIgnore
    private Volume volume;

    @OneToMany(mappedBy = "chapter", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @Fetch(FetchMode.SUBSELECT)
    @OrderBy("orderNumber ASC")
    private List<Lesson> lessons = new ArrayList<>();

    public Chapter() {
    }

    public Chapter(Integer chapterNumber, String title, String titleArabic, String description, Volume volume) {
        this.chapterNumber = chapterNumber;
        this.title = title;
        this.titleArabic = titleArabic;
        this.description = description;
        this.volume = volume;
    }

    public void addLesson(Lesson lesson) {
        lessons.add(lesson);
        lesson.setChapter(this);
    }

    public void removeLesson(Lesson lesson) {
        lessons.remove(lesson);
        lesson.setChapter(null);
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getChapterNumber() {
        return chapterNumber;
    }

    public void setChapterNumber(Integer chapterNumber) {
        this.chapterNumber = chapterNumber;
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

    public Volume getVolume() {
        return volume;
    }

    public void setVolume(Volume volume) {
        this.volume = volume;
    }

    public List<Lesson> getLessons() {
        return lessons;
    }

    public void setLessons(List<Lesson> lessons) {
        this.lessons = lessons;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Chapter chapter = (Chapter) o;
        return Objects.equals(id, chapter.id) && Objects.equals(chapterNumber, chapter.chapterNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, chapterNumber);
    }

    @Override
    public String toString() {
        return "Chapter{" +
                "id=" + id +
                ", chapterNumber=" + chapterNumber +
                ", title='" + title + '\'' +
                '}';
    }
}
