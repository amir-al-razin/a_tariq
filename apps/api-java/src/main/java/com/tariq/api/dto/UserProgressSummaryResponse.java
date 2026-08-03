package com.tariq.api.dto;

import com.tariq.api.domain.UserProgress;
import java.util.List;

/**
 * Response DTO summarizing a student's total progress, score averages, and completed lessons.
 */
public class UserProgressSummaryResponse {

    private String userId;
    private Integer totalXp;
    private Integer completedLessonsCount;
    private Double averageScore;
    private List<UserProgress> history;

    public UserProgressSummaryResponse() {
    }

    public UserProgressSummaryResponse(String userId, Integer totalXp, Integer completedLessonsCount, Double averageScore, List<UserProgress> history) {
        this.userId = userId;
        this.totalXp = totalXp;
        this.completedLessonsCount = completedLessonsCount;
        this.averageScore = averageScore;
        this.history = history;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Integer getTotalXp() {
        return totalXp;
    }

    public void setTotalXp(Integer totalXp) {
        this.totalXp = totalXp;
    }

    public Integer getCompletedLessonsCount() {
        return completedLessonsCount;
    }

    public void setCompletedLessonsCount(Integer completedLessonsCount) {
        this.completedLessonsCount = completedLessonsCount;
    }

    public Double getAverageScore() {
        return averageScore;
    }

    public void setAverageScore(Double averageScore) {
        this.averageScore = averageScore;
    }

    public List<UserProgress> getHistory() {
        return history;
    }

    public void setHistory(List<UserProgress> history) {
        this.history = history;
    }
}
