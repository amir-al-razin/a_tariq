package com.tariq.api.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tariq.api.dto.ProgressRecordRequest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class CurriculumControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void testGetVolumesReturnsSeededData() throws Exception {
        mockMvc.perform(get("/api/v1/curriculum/volumes")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].volumeNumber").value(1))
                .andExpect(jsonPath("$[0].title").value("Esho Arbi Shikhi - Volume 1"))
                .andExpect(jsonPath("$[0].chapters[0].lessons[0].titleArabic").value("الدرس الأول: هَذَا كِتَابٌ"));
    }

    @Test
    void testGetLessonByIdReturnsPedagogicalChunks() throws Exception {
        mockMvc.perform(get("/api/v1/curriculum/lessons/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.orderNumber").value(1))
                .andExpect(jsonPath("$.chunks[0].chunkType").value("VOCABULARY"))
                .andExpect(jsonPath("$.chunks[0].contentJson").isNotEmpty());
    }

    @Test
    void testRecordUserProgressSuccess() throws Exception {
        ProgressRecordRequest request = new ProgressRecordRequest(
                "student_test_99",
                1L,
                40,
                95,
                true
        );

        mockMvc.perform(post("/api/v1/progress/record")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.userId").value("student_test_99"))
                .andExpect(jsonPath("$.totalUserXp").value(40))
                .andExpect(jsonPath("$.success").value(true));
    }
}
