package com.fbfa.pitchIt.pitch.controllers.Registration.token;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;


@Service
@AllArgsConstructor
public class ConfirmationTokenService {
    private final ConfirmationTokenRepository confirmationTokenRepository;

    public void saveConfirmationToken(ConfirmationToken token){
        confirmationTokenRepository.save(token);
    }

    public ConfirmationToken getToken(String token){
        Optional<ConfirmationToken> confirmationTokenOptional = confirmationTokenRepository.findByToken(token);
        if (confirmationTokenOptional.isPresent()){
            return confirmationTokenOptional.get();
        }else{
            throw new IllegalStateException("Token not found");
        }
    }


}
