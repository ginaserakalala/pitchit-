package com.fbfa.pitchIt.pitch.config;

import com.fbfa.pitchIt.pitch.repositories.PitchRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;


@Configuration
@EnableWebMvc
public class PitchConfig implements WebMvcConfigurer {
    @Bean
    CommandLineRunner pitchCommandLineRunner(PitchRepository repository){
        return args -> {
            repository.saveAll(List.of(
//                    new Pitch(
//                            new Company("Test Business","abcdef","South Africa","www.waxes27.com","linkedin.com"),
//                            "Pitch Title",
//                            "Pitch Body")
)
            );
        };

    }
}
