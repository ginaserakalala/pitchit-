package com.fbfa.pitchIt.pitch.controllers.Requests;

import com.fbfa.pitchIt.pitch.models.appuser.AppUserRole;
import lombok.*;

import java.beans.ConstructorProperties;
import java.util.Locale;

@Getter
@ToString
@EqualsAndHashCode
public class RegistrationRequest {
    private final String firstName;
    private final String userName;
    private final String email;
    private final String password;
    private final AppUserRole userRole;


    @ConstructorProperties({"firstName", "userName", "email", "password","userRole"})
    public RegistrationRequest(String firstName, String userName, String email, String password,String userRole) {
        this.firstName = firstName;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.userRole = AppUserRole.valueOf(userRole.toUpperCase());
    }


}
