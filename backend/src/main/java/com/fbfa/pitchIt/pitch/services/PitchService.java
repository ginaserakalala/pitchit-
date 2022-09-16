package com.fbfa.pitchIt.pitch.services;

import com.fbfa.pitchIt.pitch.models.pitch.Pitch;
import com.fbfa.pitchIt.pitch.repositories.PitchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Service
public class PitchService {
    private final PitchRepository pitchRepository;

    @Autowired
    public PitchService(PitchRepository pitchRepository){
        this.pitchRepository = pitchRepository;
    }


    public void getPitch(String registrationNumber){
        pitchRepository.findPitchByCompanyRegistrationNumber(registrationNumber);
    }

    public void addNewPitch(Pitch pitch){
        pitchRepository.save(pitch);
    }

    @Transactional
    public String updatePitch(Pitch pitch,String registrationNumber){
        Optional<Pitch> oldPitchOptional = pitchRepository.findPitchByCompanyRegistrationNumber(registrationNumber);
        System.out.println(pitch.toString());
        if (oldPitchOptional.isPresent()){
            Pitch oldPitch = oldPitchOptional.get();
            oldPitch.setBody(pitch.getBody());
            oldPitch.setCategory(pitch.getCategory());

            return oldPitch.toString();

        }else return new  IllegalArgumentException("Registration Number not found").getMessage();

    }
}
