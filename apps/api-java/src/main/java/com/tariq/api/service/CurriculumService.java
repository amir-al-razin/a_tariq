package com.tariq.api.service;

import com.tariq.api.domain.Lesson;
import com.tariq.api.domain.Volume;
import com.tariq.api.exception.ResourceNotFoundException;
import com.tariq.api.repository.LessonRepository;
import com.tariq.api.repository.VolumeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

/**
 * Service layer managing Quranic Arabic curriculum structure (Volumes, Chapters, Lessons).
 */
@Service
@Transactional(readOnly = true)
public class CurriculumService {

    private final VolumeRepository volumeRepository;
    private final LessonRepository lessonRepository;

    public CurriculumService(VolumeRepository volumeRepository, LessonRepository lessonRepository) {
        this.volumeRepository = volumeRepository;
        this.lessonRepository = lessonRepository;
    }

    public List<Volume> getAllVolumes() {
        return volumeRepository.findAll();
    }

    public Volume getVolumeById(Long id) {
        return volumeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Volume", "id", id));
    }

    public Volume getVolumeByNumber(Integer volumeNumber) {
        return volumeRepository.findByVolumeNumber(volumeNumber)
                .orElseThrow(() -> new ResourceNotFoundException("Volume", "volumeNumber", volumeNumber));
    }

    public List<Lesson> getAllLessons() {
        return lessonRepository.findAll();
    }

    public Lesson getLessonById(Long id) {
        return lessonRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Lesson", "id", id));
    }

    public List<Lesson> getLessonsByChapterId(Long chapterId) {
        return lessonRepository.findByChapterIdOrderByOrderNumberAsc(chapterId);
    }
}
