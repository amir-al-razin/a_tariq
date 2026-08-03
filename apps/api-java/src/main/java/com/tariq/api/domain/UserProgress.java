package com.tariq.api.domain;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.Objects;

/**
 * Tracks student progress, completed lessons, accumulated XP, and quiz scores.
 */
@Entity
@Table(name = "user_progress", indexes = {
        @Index(name = "idx_user_progress_user_id", columnList = "user_id"),
        @Index(name = "idx_user_progress_lesson_id", columnList = "lesson_id")
})
public class UserProgress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false, length = 100)
    private String userId;

    @Column(name = "lesson_id", nullable = false)
    private Long lessonId;

    @Column(name = "completed", nullable = false)
    private Boolean completed = true;

    @Column(name = "xp_earned", nullable = false)
    private Integer xpEarned = 0;

    @Column(name = "score", nullable = false)
    private Integer score = 100;

    @Column(name = "completed_at", nullable = false, updatable = false)
    private LocalDateTime completedAt;

    @PrePersist
    protected void onCreate() {
        if (this.completedAt == null) {
            this.completedAt = LocalDateTime.now();
        }
    }

    public UserProgress() {
    }

    public UserProgress(String userId, Long lessonId, Boolean completed, Integer xpEarned, Integer score) {
        this.userId = userId;
        this.lessonId = lessonId;
        this.completed = completed;
        this.xpEarned = xpEarned;
        this.score = score;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Long getLessonId() {
        return lessonId;
    }

    public void setLessonId(Long lessonId) {
        this.lessonId = lessonId;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

    public Integer getXpEarned() {
        return xpEarned;
    }

    public void setXpEarned(Integer xpEarned) {
        this.xpEarned = xpEarned;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public LocalDateTime getCompletedAt() {
        return completedAt;
    }

    public void setCompletedAt(LocalDateTime completedAt) {
        this.completedAt = completedAt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserProgress that = (UserProgress) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "UserProgress{" +
                "id=" + id +
                ", userId='" + userId + '\'' +
                ", lessonId=" + lessonId +
                ", xpEarned=" + xpEarned +
                ", score=" + score +
                '}';
    }
}
