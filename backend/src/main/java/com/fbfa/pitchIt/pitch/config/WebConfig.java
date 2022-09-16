package com.fbfa.pitchIt.pitch.config;

import org.apache.catalina.servlets.WebdavServlet;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.boot.web.servlet.ServletRegistrationBean;

import javax.servlet.ServletRegistration;

@Configuration
public class WebConfig {

    @Bean
    ServletRegistrationBean h2ServletRegistration(){
        ServletRegistrationBean registrationBean = new ServletRegistrationBean(new WebdavServlet());

        registrationBean.addUrlMappings("/console/*");
        return registrationBean;
    }
}
