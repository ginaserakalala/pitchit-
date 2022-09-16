package com.fbfa.pitchIt.pitch.security.config;

import com.fbfa.pitchIt.pitch.controllers.Requests.RegistrationRequest;
import com.fbfa.pitchIt.pitch.models.appuser.AppUserRole;
import com.fbfa.pitchIt.pitch.services.AppUserService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
@AllArgsConstructor
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final AppUserService appUserService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors()
                .disable()
                .csrf()
                .disable()
                .authorizeRequests()
                .antMatchers("/api/v*/registration/**")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and().logout().logoutUrl("/logout").invalidateHttpSession(true).deleteCookies();
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("user1").password(bCryptPasswordEncoder.encode("user1Pass")).roles("USER")
                .and()
                .withUser("user2").password(bCryptPasswordEncoder.encode("user2Pass")).roles("USER")
                .and()
                .withUser("admin").password(bCryptPasswordEncoder.encode("adminPass")).roles("ADMIN");
        auth.authenticationProvider(daoAuthenticationProvider());
    }
    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider(){
        DaoAuthenticationProvider provider =
                new DaoAuthenticationProvider();

        provider.setPasswordEncoder(bCryptPasswordEncoder);
        provider.setUserDetailsService(appUserService);

        return provider;

    }

}
