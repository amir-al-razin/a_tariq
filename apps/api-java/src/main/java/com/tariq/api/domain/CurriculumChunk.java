package com.tariq.api.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.Objects;

/**
 * Stores structured pedagogical content or JSON payloads for exercises, vocabulary cards,
 * translation prompts, and grammar notes within a lesson.
 */
@Entity
@Table(name = "curriculum_chunks")
public class CurriculumChunk {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "sequence_number", nullable = false)
    private Integer sequenceNumber;

    /**
     * E.g., VOCABULARY, GRAMMAR_NOTE, MULTIPLE_CHOICE, TRANSLATION_EXERCISE, AUDIO_PROMPT.
     */
    @Column(name = "chunk_type", nullable = false, length = 50)
    private String chunkType;

    /**
     * Stores rich structural JSON or content text representing the pedagogical exercise payload.
     */
    @Column(name = "content_json", columnDefinition = "TEXT", nullable = false)
    private String contentJson;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "lesson_id", nullable = false)
    @JsonIgnore
    private Lesson lesson;

    public CurriculumChunk() {
    }

    public CurriculumChunk(Integer sequenceNumber, String chunkType, String contentJson, Lesson lesson) {
        this.sequenceNumber = sequenceNumber;
        this.chunkType = chunkType;
        this.contentJson = contentJson;
        this.lesson = lesson;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getSequenceNumber() {
        return sequenceNumber;
    }

    public void setSequenceNumber(Integer sequenceNumber) {
        this.sequenceNumber = sequenceNumber;
    }

    public String getChunkType() {
        return chunkType;
    }

    public void setChunkType(String chunkType) {
        this.chunkType = chunkType;
    }

    public String getContentJson() {
        return contentJson;
    }

    public void setContentJson(String contentJson) {
        this.contentJson = contentJson;
    }

    public Lesson getLesson() {
        return lesson;
    }

    public void setLesson(Lesson lesson) {
        this.lesson = lesson;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CurriculumChunk that = (CurriculumChunk) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "CurriculumChunk{" +
                "id=" + id +
                ", sequenceNumber=" + sequenceNumber +
                ", chunkType='" + chunkType + '\'' +
                '}';
    }
}
