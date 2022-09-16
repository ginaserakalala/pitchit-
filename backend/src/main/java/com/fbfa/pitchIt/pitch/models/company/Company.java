package com.fbfa.pitchIt.pitch.models.company;

import com.fasterxml.jackson.annotation.JsonBackReference;
//import com.fbfa.pitchIt.pitch.models.messaging.ChatLobby;
import com.fbfa.pitchIt.pitch.models.pitch.Pitch;
import com.fbfa.pitchIt.pitch.models.appuser.User;
import org.hibernate.annotations.GenericGenerator;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "company")
public class Company {
    /*
        Summary:
            Class defines the company's model alongside its getter and setter methods
     */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO,generator="native")
    @GenericGenerator(name = "native",strategy = "native")
    private Long id;

    private String companyName;
    private String registrationNumber;
    private String country;
    private String date;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;



    @NotNull
    @Basic(fetch = FetchType.EAGER)

    @JsonBackReference
    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Pitch> pitches = new ArrayList<>();

//    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<ChatLobby> chatLobbies = new ArrayList<>();

//    public List<ChatLobby> getChatLobbies() {
//        return chatLobbies;
//    }

//    public void setChatLobbies(List<ChatLobby> chatLobbies) {
//        this.chatLobbies = chatLobbies;
//    }

    public Company() {
    }

    public Company(String companyName, String registrationNumber, String country,User user){
        this.date = LocalDate.now().toString();
        this.companyName = companyName;
        this.registrationNumber = registrationNumber;
        this.country = country;
        this.addPitch(new Pitch(this,null,null));
        this.setUser(user);
//        this.chatLobbies.add(new ChatLobby());
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public String getCountry() {
        return country;
    }

    public String getDate() {
        return date.toString();
    }

    public String getCompanyName() {
        return companyName;
    }

    public Long getId() {
        return id;
    }

    public List<Pitch> getPitches() {
        return pitches;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public void setDate(LocalDate date) {
        this.date = date.toString();
    }

    public void setPitches(List<Pitch> pitches) {
        this.pitches = pitches;
    }

    public void addPitch(Pitch pitch){
        this.getPitches().add(pitch);
        this.setPitches(this.getPitches());
    }

    @Override
    public String toString() {
        return "Company{" +
                "id=" + id +
                ", companyName='" + companyName + '\'' +
                ", registrationNumber='" + registrationNumber + '\'' +
                ", country='" + country + '\'' +
                ", date='" + date + '\'' +
                ", user=" + user +
                '}';
    }
}

