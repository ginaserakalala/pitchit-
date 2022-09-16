package com.fbfa.pitchIt.pitch.models.pitch;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fbfa.pitchIt.pitch.constants.Categories;
import com.fbfa.pitchIt.pitch.models.company.Company;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "pitches")

public class Pitch {
    /*
        Summary:
            Class defines the pitch's model alongside its getters and setter methods
     */

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO,generator="native")
    @GenericGenerator(name = "native",strategy = "native")
    private Long id;


    private String title;
    private String body;
    private String companyRegistrationNumber;
    private String pitchPdf;
    private Categories category;

    @ManyToOne(cascade = {CascadeType.ALL},fetch = FetchType.EAGER)
    @JoinColumn(name = "company_id")
    @JsonBackReference
    private Company company;


    @JsonIgnore
    public Pitch(Company company, String title, String body) {
        this.body = body;
        this.title = title;
        this.company = company;
        System.out.println(company.toString());
        this.pitchPdf = null;
        this.companyRegistrationNumber = company.getRegistrationNumber();
    }


    public Pitch(){
        this.id = 1L;
        this.body = "Test body";
        this.title = "Untitled";
        this.company = company;
        this.pitchPdf = null;
    }

    public Long getId() {
        return id;
    }

    public String getCompanyRegistrationNumber() {
        return companyRegistrationNumber;
    }

    public String getPitchPdf() {
        return pitchPdf;
    }

    public String getBody() {
        return body;
    }

    public String getTitle() {
        return title;
    }

    public Company getCompany() {
        return company;
    }

    public Categories getCategory() {
        return category;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setCompanyRegistrationNumber(String companyRegistrationNumber) {
        this.companyRegistrationNumber = companyRegistrationNumber;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public void setPitchPdf(String pitchPdf) {
        this.pitchPdf = pitchPdf;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setCategory(Categories category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "Pitch{" +
                "id:" + id +
                ", title:'" + title + '\'' +
                ", body:'" + body + '\'' +
                ", companyRegistrationNumber:'" + companyRegistrationNumber + '\'' +
                ", pitchPdf:'" + pitchPdf + '\'' +
                ", category:" + category +
                ", company:" + company.toString() +
                '}';
    }
}
