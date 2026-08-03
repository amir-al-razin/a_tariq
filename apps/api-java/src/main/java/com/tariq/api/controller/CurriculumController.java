package com.tariq.api.controller;

import com.tariq.api.domain.Lesson;
import com.tariq.api.domain.Volume;
import com.tariq.api.service.CurriculumService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * REST Controller exposing Quranic Arabic curriculum structure and lesson content.
 */
@RestController
@RequestMapping("/api/v1/curriculum")
@CrossOrigin(origins = "*", maxAge = 3600)
public class CurriculumController {

    private final CurriculumService curriculumService;

    public CurriculumController(CurriculumService curriculumService) {
        this.curriculumService = curriculumService;
    }

    /**
     * Retrieve all curriculum volumes along with their chapters and lessons table of contents.
     *
     * @return list of Volumes
     */
    @GetMapping("/volumes")
    public ResponseEntity<List<Volume>> getVolumes() {
        return ResponseEntity.ok(curriculumService.getAllVolumes());
    }

    /**
     * Retrieve a specific volume by database ID.
     *
     * @param id volume ID
     * @return Volume details
     */
    @GetMapping("/volumes/{id}")
    public ResponseEntity<Volume> getVolumeById(@PathVariable Long id) {
        return ResponseEntity.ok(curriculumService.getVolumeById(id));
    }

    /**
     * Retrieve a complete lesson by its database ID, including all pedagogical CurriculumChunks and JSON payloads.
     *
     * @param id lesson ID
     * @return Lesson content with structural pedagogical chunks
     */
    @GetMapping("/lessons/{id}")
    public ResponseEntity<Lesson> getLessonById(@PathVariable Long id) {
        return ResponseEntity.ok(curriculumService.getLessonById(id));
    }

    /**
     * Retrieve all lessons belonging to a specific chapter ID.
     *
     * @param chapterId chapter ID
     * @return list of Lessons
     */
    @GetMapping("/chapters/{chapterId}/lessons")
    public ResponseEntity<List<Lesson>> getLessonsByChapterId(@PathVariable Long chapterId) {
        return ResponseEntity.ok(curriculumService.getLessonsByChapterId(chapterId));
    }
}
