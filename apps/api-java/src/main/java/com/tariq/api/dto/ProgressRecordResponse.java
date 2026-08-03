package com.tariq.api.dto;

/**
 * Response DTO returned after successfully recording user progress.
 */
public class ProgressRecordResponse {

    private Long recordId;
    private String userId;
    private Long lessonId;
    private Integer totalUserXp;
    private String message;
    private boolean success;

    public ProgressRecordResponse() {
    }

    public ProgressRecordResponse(Long recordId, String userId, Long lessonId, Integer totalUserXp, String message, boolean success) {
        this.recordId = recordId;
        this.userId = userId;
        this.lessonId = lessonId;
        this.totalUserXp = totalUserXp;
        this.message = message;
        this.success = success;
    }

    public Long getRecordId() {
        return recordId;
    }

    public void setRecordId(Long recordId) {
        this.recordId = recordId;
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

    public Integer getTotalUserXp() {
        return totalUserXp;
    }

    public void setTotalUserXp(Integer totalUserXp) {
        this.totalUserXp = totalUserXp;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }
}
