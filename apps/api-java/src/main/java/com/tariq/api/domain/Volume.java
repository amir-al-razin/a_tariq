package com.tariq.api.domain;

import jakarta.persistence.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * Represents a major textbook volume in the Quranic Arabic curriculum
 * (e.g., Esho Arbi Shikhi Volume 1, Volume 2, Volume 3).
 */
@Entity
@Table(name = "curriculum_volumes")
public class Volume {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "volume_number", nullable = false, unique = true)
    private Integer volumeNumber;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "title_arabic")
    private String titleArabic;

    @Column(name = "description", length = 1000)
    private String description;

    @OneToMany(mappedBy = "volume", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @Fetch(FetchMode.SUBSELECT)
    @OrderBy("chapterNumber ASC")
    private List<Chapter> chapters = new ArrayList<>();

    public Volume() {
    }

    public Volume(Integer volumeNumber, String title, String titleArabic, String description) {
        this.volumeNumber = volumeNumber;
        this.title = title;
        this.titleArabic = titleArabic;
        this.description = description;
    }

    public void addChapter(Chapter chapter) {
        chapters.add(chapter);
        chapter.setVolume(this);
    }

    public void removeChapter(Chapter chapter) {
        chapters.remove(chapter);
        chapter.setVolume(null);
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getVolumeNumber() {
        return volumeNumber;
    }

    public void setVolumeNumber(Integer volumeNumber) {
        this.volumeNumber = volumeNumber;
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

    public List<Chapter> getChapters() {
        return chapters;
    }

    public void setChapters(List<Chapter> chapters) {
        this.chapters = chapters;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Volume volume = (Volume) o;
        return Objects.equals(id, volume.id) && Objects.equals(volumeNumber, volume.volumeNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, volumeNumber);
    }

    @Override
    public String toString() {
        return "Volume{" +
                "id=" + id +
                ", volumeNumber=" + volumeNumber +
                ", title='" + title + '\'' +
                '}';
    }
}
