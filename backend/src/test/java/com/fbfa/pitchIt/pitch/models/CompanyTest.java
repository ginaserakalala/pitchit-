package com.fbfa.pitchIt.pitch.models;

import com.fbfa.pitchIt.pitch.models.company.Company;
import com.fbfa.pitchIt.pitch.models.pitch.Pitch;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.util.List;
import java.util.Locale;

import static org.junit.jupiter.api.Assertions.*;

class CompanyTest {
    Company company;

    @BeforeEach
    void setUp() {
//        this.company = new Company(
//                "Waxes27 PTY LTD",
//                "123456789",
//                "United Kingdom"
//        );
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void getRegistrationNumber() {
        String registrationNumber = this.company.getRegistrationNumber();

        assertEquals("123456789",registrationNumber);
        for (String i: registrationNumber.split("")) {
            assertTrue(Character.isDigit(i.charAt(0)));
        }
    }

    @Test
    void getCountry() {
        String country = this.company.getCountry();

        assertEquals("united kingdom",country.toLowerCase(Locale.ROOT));
    }

    @Test
    void getDate() {
        String date = this.company.getDate().toString();

        assertEquals(date,LocalDate.now().toString());
    }

    @Test
    void getCompanyName() {
        String companyName = this.company.getCompanyName();

        assertEquals("waxes27 pty ltd",companyName.toLowerCase(Locale.ROOT));
    }

    @Test
    void getPitches() {
        List<Pitch> pitches = this.company.getPitches();
        assertTrue(!pitches.isEmpty());
        assertTrue(pitches.size() == 1);
    }

    @Test
    void setId() {
    }

    @Test
    void setRegistrationNumber() {
    }

    @Test
    void setCountry() {
    }

    @Test
    void setCompanyName() {
    }

    @Test
    void setDate() {
    }

    @Test
    void setPitches() {
    }

    @Test
    void addPitch() {
    }
}