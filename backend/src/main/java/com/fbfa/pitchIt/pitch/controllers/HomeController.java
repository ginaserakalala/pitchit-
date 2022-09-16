package com.fbfa.pitchIt.pitch.controllers;

import com.fbfa.pitchIt.pitch.response.ResponseOutbound;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/")
public class HomeController {

    @GetMapping
    public String home(@CookieValue(value = "username",defaultValue = "No user registered") String username){
        JSONObject response = new JSONObject();
        response.put("username",username);
        response.put("password","TestPassword");
        return new ResponseOutbound(
                "Logged in",
                "success",
                response.toString()

        ).toString();
    };
}
