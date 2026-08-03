package com.tariq.api.repository;

import com.tariq.api.domain.CurriculumChunk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CurriculumChunkRepository extends JpaRepository<CurriculumChunk, Long> {

    List<CurriculumChunk> findByLessonIdOrderBySequenceNumberAsc(Long lessonId);
}
