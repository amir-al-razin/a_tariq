package com.tariq.api.controller;

import com.tariq.api.dto.ProgressRecordRequest;
import com.tariq.api.dto.ProgressRecordResponse;
import com.tariq.api.dto.UserProgressSummaryResponse;
import com.tariq.api.service.ProgressService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * REST Controller managing student progress tracking, XP calculation, and scoring.
 */
@RestController
@RequestMapping("/api/v1/progress")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ProgressController {

    private final ProgressService progressService;

    public ProgressController(ProgressService progressService) {
        this.progressService = progressService;
    }

    /**
     * Record student progress upon completing a lesson or pedagogical exercise.
     *
     * @param request Progress record request body
     * @return Response status with updated total XP and success acknowledgment
     */
    @PostMapping("/record")
    public ResponseEntity<ProgressRecordResponse> recordProgress(@Valid @RequestBody ProgressRecordRequest request) {
        ProgressRecordResponse response = progressService.recordProgress(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    /**
     * Retrieve cumulative progress summary, score analytics, and completion history for a student.
     *
     * @param userId Student identifier
     * @return User progress summary and lesson completion timeline
     */
    @GetMapping("/user/{userId}")
    public ResponseEntity<UserProgressSummaryResponse> getUserProgress(@PathVariable String userId) {
        return ResponseEntity.ok(progressService.getUserSummary(userId));
    }
}
