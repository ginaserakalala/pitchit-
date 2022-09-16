package com.fbfa.pitchIt.pitch.controllers;

import com.fbfa.pitchIt.pitch.models.pitch.Pitch;
import com.fbfa.pitchIt.pitch.services.PitchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
@RequestMapping(path = "/api/v1/company/pitch")
public class PitchController {
    private final PitchService service;

    @Autowired
    public PitchController(PitchService service){this.service = service;}


    @GetMapping
    public void getPitchByCompany(@PathVariable("registrationNumber") String registrationNumber){
        service.getPitch(registrationNumber);
    }

//    @PostMapping
//    public String addNewPitch(@RequestBody Pitch newPitch){
//        service.addNewPitch(newPitch);
//        return newPitch.toString();
//    }

    @PutMapping(path = "{registrationNumber}")
    public String updatePitchByCompanyRegistrationNumber(
            @PathVariable("registrationNumber") String registrationNumber,
            @RequestBody Pitch pitch
    ){

        return service.updatePitch(pitch,registrationNumber);
    }

    // TODO: Delete
}
