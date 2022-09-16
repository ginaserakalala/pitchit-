package com.fbfa.pitchIt.pitch.services;

import com.fbfa.pitchIt.pitch.controllers.Registration.token.ConfirmationToken;
import com.fbfa.pitchIt.pitch.controllers.Registration.token.ConfirmationTokenService;
import com.fbfa.pitchIt.pitch.controllers.Requests.RegistrationRequest;
import com.fbfa.pitchIt.pitch.models.company.Company;
import com.fbfa.pitchIt.pitch.models.appuser.AppUserRole;
import com.fbfa.pitchIt.pitch.models.appuser.User;
import com.fbfa.pitchIt.pitch.repositories.UserRepository;
import com.fbfa.pitchIt.pitch.response.ResponseOutbound;
import com.fbfa.pitchIt.pitch.validation.EmailValidator;
import com.fbfa.pitchIt.pitch.validation.PasswordValidator;
import com.fbfa.pitchIt.pitch.validation.UserValidator;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class AppUserService implements UserDetailsService {
    private final UserValidator userValidator;
    private final EmailValidator emailValidator;
    private final CompanyService companyService;
    private final BCryptPasswordEncoder passwordEncoder;
    private final PasswordValidator passwordValidator = new PasswordValidator();
    private final ConfirmationTokenService confirmationTokenService;
    private final UserRepository userRepository;


    @Transactional
    public String confirmToken(String token){
        ConfirmationToken confirmationToken = confirmationTokenService
                .getToken(token);

        if (confirmationToken.getConfirmedAt() != null){
            throw new IllegalStateException("Email already confirm");
        }

        LocalDateTime expiredAt = confirmationToken.getExpiresAt();

        if (expiredAt.isBefore(LocalDateTime.now())){
            throw new IllegalStateException("Token Expired");
        }

        confirmationToken.setConfirmedAt(LocalDateTime.now());
        this.enableUser(confirmationToken.getUser().getEmail());
        return new ResponseOutbound(
                "User has been confirmed",
                "success",
                token
        ).toString();
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Username not found"));
    }

    public String registerUser(RegistrationRequest request){
        boolean isValidEmail = emailValidator.test(request.getEmail());
        boolean isValidPassword = passwordValidator.test(request.getPassword());

        if (userRepository.findByUsername(request.getUserName().toString()).isPresent()){
            throw new IllegalStateException("Username Already present");
        }

        if (!isValidEmail) {
            throw new IllegalStateException("Invalid Email Address");
        }

        if (!isValidPassword){
            throw new IllegalStateException("Password must be greater than 8 characters");
        }

        User user = new User(
                request.getUserName(),
                passwordEncoder.encode(request.getPassword()),
                request.getEmail(),
                request.getUserRole()

        );



        user.setUserRole(AppUserRole.valueOf(request.getUserRole().toString()));

        String token = UUID.randomUUID().toString();
        ConfirmationToken confirmationToken= new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                user
        );

        userRepository.save(user);
        if (user.getUserRole() == AppUserRole.BUSINESS){
            companyService.addNewCompany(
                    new Company(
                            "",
                            user.getUsername(),
                            "",
                            user
                    ),
                    user.getEmail()
            );
        }

        confirmationTokenService.saveConfirmationToken(confirmationToken);
        return user.getUsername();
    }

    public void enableUser(String email){
        Optional<User> user = userRepository.findByEmail(email);

        if (user.isEmpty()){
            throw new IllegalStateException("User not found!");
        }else {
            user.get().setEnabled(true);
        }
    }


    public String getCurrentUser(String email){
        Optional<User> userOptional = userRepository.findByEmail(email);
        System.out.println(userOptional);
        if (userOptional.isPresent()){
            User user = userOptional.get();
            return user.toString();
        }
        else {
            throw new IllegalStateException("User '" +email+"' not found");
        }
    };


}
