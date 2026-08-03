package com.tariq.api.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

/**
 * Data Transfer Object representing a request to record user progress on a curriculum lesson.
 */
public class ProgressRecordRequest {

    @NotBlank(message = "User ID must not be blank")
    private String userId;

    @NotNull(message = "Lesson ID is required")
    private Long lessonId;

    @NotNull(message = "XP earned is required")
    @Min(value = 0, message = "XP earned must be positive")
    private Integer xpEarned;

    @NotNull(message = "Score is required")
    @Min(value = 0, message = "Score must be between 0 and 100")
    @Max(value = 100, message = "Score must be between 0 and 100")
    private Integer score;

    private Boolean completed = true;

    public ProgressRecordRequest() {
    }

    public ProgressRecordRequest(String userId, Long lessonId, Integer xpEarned, Integer score, Boolean completed) {
        this.userId = userId;
        this.lessonId = lessonId;
        this.xpEarned = xpEarned;
        this.score = score;
        this.completed = completed;
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

    public Boolean getCompleted() {
        return completed != null && completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }
}
