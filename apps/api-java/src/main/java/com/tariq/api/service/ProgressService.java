package com.tariq.api.service;

import com.tariq.api.domain.Lesson;
import com.tariq.api.domain.UserProgress;
import com.tariq.api.dto.ProgressRecordRequest;
import com.tariq.api.dto.ProgressRecordResponse;
import com.tariq.api.dto.UserProgressSummaryResponse;
import com.tariq.api.repository.UserProgressRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

/**
 * Service layer for recording student progress and calculating cumulative XP and analytics.
 */
@Service
public class ProgressService {

    private final UserProgressRepository userProgressRepository;
    private final CurriculumService curriculumService;

    public ProgressService(UserProgressRepository userProgressRepository, CurriculumService curriculumService) {
        this.userProgressRepository = userProgressRepository;
        this.curriculumService = curriculumService;
    }

    @Transactional
    public ProgressRecordResponse recordProgress(ProgressRecordRequest request) {
        // Verify lesson exists in curriculum
        Lesson lesson = curriculumService.getLessonById(request.getLessonId());

        UserProgress progress = new UserProgress(
                request.getUserId(),
                lesson.getId(),
                request.getCompleted(),
                request.getXpEarned(),
                request.getScore()
        );

        UserProgress saved = userProgressRepository.save(progress);
        Integer totalXp = userProgressRepository.calculateTotalXpByUserId(request.getUserId());
        if (totalXp == null) totalXp = saved.getXpEarned();

        return new ProgressRecordResponse(
                saved.getId(),
                saved.getUserId(),
                saved.getLessonId(),
                totalXp,
                "Progress recorded successfully for lesson: " + lesson.getTitle(),
                true
        );
    }

    @Transactional(readOnly = true)
    public UserProgressSummaryResponse getUserSummary(String userId) {
        List<UserProgress> history = userProgressRepository.findByUserIdOrderByCompletedAtDesc(userId);
        Integer totalXp = userProgressRepository.calculateTotalXpByUserId(userId);
        if (totalXp == null) totalXp = 0;

        int completedCount = (int) history.stream().filter(UserProgress::getCompleted).count();
        double avgScore = history.stream().mapToInt(UserProgress::getScore).average().orElse(0.0);

        return new UserProgressSummaryResponse(
                userId,
                totalXp,
                completedCount,
                Math.round(avgScore * 100.0) / 100.0,
                history
        );
    }
}
