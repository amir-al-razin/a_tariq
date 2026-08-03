package com.tariq.api.repository;

import com.tariq.api.domain.Volume;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface VolumeRepository extends JpaRepository<Volume, Long> {

    Optional<Volume> findByVolumeNumber(Integer volumeNumber);
}
