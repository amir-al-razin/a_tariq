package com.tariq.api.config;

import com.tariq.api.domain.*;
import com.tariq.api.repository.UserProgressRepository;
import com.tariq.api.repository.VolumeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

/**
 * Startup Data Seeder to prepopulate H2 database with authentic Esho Arbi Shikhi
 * sample curriculum content on developer startup.
 */
@Component
@Profile("!test-no-seed")
public class DataSeeder implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataSeeder.class);

    private final VolumeRepository volumeRepository;
    private final UserProgressRepository userProgressRepository;

    public DataSeeder(VolumeRepository volumeRepository, UserProgressRepository userProgressRepository) {
        this.volumeRepository = volumeRepository;
        this.userProgressRepository = userProgressRepository;
    }

    @Override
    @Transactional
    public void run(String... args) {
        if (volumeRepository.count() > 0) {
            log.info("Curriculum database already seeded. Skipping initialization.");
            return;
        }

        log.info("Seeding initial Quranic Arabic Curriculum (Esho Arbi Shikhi) into H2 Database...");

        // 1. Create Volume 1
        Volume vol1 = new Volume(
                1,
                "Esho Arbi Shikhi - Volume 1",
                "تعالوا نتعلم العربية - الجزء الأول",
                "Foundation of Arabic grammatical structure, demonstrative pronouns, simple equational nouns and adjectives."
        );

        // 2. Create Chapter 1
        Chapter ch1 = new Chapter(
                1,
                "Chapter 1: Demonstratives and Basic Objects",
                "الدرس الأول: أسماء الإشارة للأشياء",
                "Introduction to near (هذا/هذه) and distant (ذلك/تلك) masculine and feminine demonstratives.",
                vol1
        );
        vol1.addChapter(ch1);

        // 3. Create Lesson 1
        Lesson lesson1 = new Lesson(
                1,
                "Lesson 1: This is a Book (Masculine Near Demonstratives)",
                "الدرس الأول: هَذَا كِتَابٌ",
                "Learning basic masculine nouns with near pointer pronoun 'Hadha' (هذا).",
                ch1
        );
        ch1.addLesson(lesson1);

        // Add pedagogical structural chunks (JSON payloads for Headless CMS consumer)
        CurriculumChunk chunk1 = new CurriculumChunk(
                1,
                "VOCABULARY",
                "{\"items\": [" +
                        "{\"arabic\": \"كِتَابٌ\", \"transliteration\": \"Kitabun\", \"english\": \"A book\", \"gender\": \"MASCULINE\"}," +
                        "{\"arabic\": \"قَلَمٌ\", \"transliteration\": \"Qalamun\", \"english\": \"A pen\", \"gender\": \"MASCULINE\"}," +
                        "{\"arabic\": \"مَسْجِدٌ\", \"transliteration\": \"Masjidun\", \"english\": \"A mosque\", \"gender\": \"MASCULINE\"}," +
                        "{\"arabic\": \"بَيْتٌ\", \"transliteration\": \"Baytun\", \"english\": \"A house\", \"gender\": \"MASCULINE\"}," +
                        "{\"arabic\": \"بَابٌ\", \"transliteration\": \"Babun\", \"english\": \"A door\", \"gender\": \"MASCULINE\"}" +
                        "]}",
                lesson1
        );
        lesson1.addChunk(chunk1);

        CurriculumChunk chunk2 = new CurriculumChunk(
                2,
                "GRAMMAR_NOTE",
                "{\"rule\": \"In Arabic, equational sentences (Al-Jumlah Al-Ismiyyah) do not require an explicit verb for 'is' or 'are' in the present tense.\", \"example\": \"هَذَا كِتَابٌ means 'This [is a] book.'\"}",
                lesson1
        );
        lesson1.addChunk(chunk2);

        CurriculumChunk chunk3 = new CurriculumChunk(
                3,
                "EXERCISE_MULTIPLE_CHOICE",
                "{\"prompt\": \"Select the correct Arabic phrase for 'This is a house':\", " +
                        "\"options\": [\"هَذَا مَسْجِدٌ\", \"هَذَا بَيْتٌ\", \"ذَٰلِكَ كِتَابٌ\", \"هَذِهِ سَيَّارَةٌ\"], " +
                        "\"answerIndex\": 1, " +
                        "\"xpReward\": 25}",
                lesson1
        );
        lesson1.addChunk(chunk3);

        // 4. Create Lesson 2
        Lesson lesson2 = new Lesson(
                2,
                "Lesson 2: That is a Pen (Masculine Distant Demonstratives)",
                "الدرس الثاني: ذَٰلِكَ قَلَمٌ",
                "Learning distant demonstrative pronoun 'Dhalika' (ذلك) with masculine nouns.",
                ch1
        );
        ch1.addLesson(lesson2);

        CurriculumChunk chunk2_1 = new CurriculumChunk(
                1,
                "VOCABULARY",
                "{\"items\": [" +
                        "{\"arabic\": \"نَجْمٌ\", \"transliteration\": \"Najmun\", \"english\": \"A star\", \"gender\": \"MASCULINE\"}," +
                        "{\"arabic\": \"مِصبَاحٌ\", \"transliteration\": \"Misbahun\", \"english\": \"A lamp\", \"gender\": \"MASCULINE\"}" +
                        "]}",
                lesson2
        );
        lesson2.addChunk(chunk2_1);

        // Persist complete hierarchy in one atomic cascade
        volumeRepository.save(vol1);

        // 5. Seed sample student progress
        UserProgress sampleProgress = new UserProgress(
                "tariq_student_01",
                1L, // Assuming lesson1 gets ID 1
                true,
                50,
                100
        );
        userProgressRepository.save(sampleProgress);

        log.info("Database seeding successfully completed! Volume 1, Chapters, Lessons, and initial sample progress recorded.");
    }
}
