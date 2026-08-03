package com.tariq.api.repository;

import com.tariq.api.domain.UserProgress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface UserProgressRepository extends JpaRepository<UserProgress, Long> {

    List<UserProgress> findByUserIdOrderByCompletedAtDesc(String userId);

    List<UserProgress> findByUserIdAndLessonId(String userId, Long lessonId);

    @Query("SELECT SUM(u.xpEarned) FROM UserProgress u WHERE u.userId = :userId")
    Integer calculateTotalXpByUserId(@Param("userId") String userId);
}
