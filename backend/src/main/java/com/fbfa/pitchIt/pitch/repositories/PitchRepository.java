package com.fbfa.pitchIt.pitch.repositories;

import com.fbfa.pitchIt.pitch.models.pitch.Pitch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PitchRepository extends JpaRepository<Pitch,Long> {
    //    @Query("SELECT s FROM pitch s WHERE s.serialNumber =?1")
    Optional<Pitch> findPitchByCompanyRegistrationNumber(String registrationNumber);
}