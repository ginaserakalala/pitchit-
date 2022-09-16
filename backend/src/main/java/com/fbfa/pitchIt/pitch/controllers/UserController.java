package com.fbfa.pitchIt.pitch.controllers;


import com.fbfa.pitchIt.pitch.services.AppUserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;

@RestController
@AllArgsConstructor
@RequestMapping("api/v1/user")
@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
public class UserController {
    private final AppUserService service;

    @GetMapping(path = "/{email}")
    public String getCurrentUser(@PathVariable("email") String email){
        String response = service.getCurrentUser(email);
        return response;
    }

}
