//package com.fbfa.pitchIt.pitch.models.messaging;
//
//import com.fbfa.pitchIt.pitch.models.company.Company;
//import lombok.Getter;
//
//import javax.persistence.*;
//import java.util.List;
//
//@Entity
//@Table(name = "chat_lobby")
//@Getter
//public class ChatLobby {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id", nullable = false)
//    private Long id;
//
//    private List<Message> messages;
//
//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "company_id", unique = true)
//    private Company company;
//
//    public Company getCompany() {
//        return company;
//    }
//
//    public void setCompany(Company company) {
//        this.company = company;
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//}