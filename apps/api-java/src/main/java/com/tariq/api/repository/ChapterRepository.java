package com.tariq.api.repository;

import com.tariq.api.domain.Chapter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ChapterRepository extends JpaRepository<Chapter, Long> {

    List<Chapter> findByVolumeIdOrderByChapterNumberAsc(Long volumeId);
}
