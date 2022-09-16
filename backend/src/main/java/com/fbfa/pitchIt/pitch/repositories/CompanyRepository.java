package com.fbfa.pitchIt.pitch.repositories;
import com.fbfa.pitchIt.pitch.models.company.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company,Long> {
    /*
        Summary:
            Interface handles JPA related database queries
     */
    //    @Query("SELECT s FROM pitch s WHERE s.serialNumber =?1")
    Optional<Company> findCompanyByRegistrationNumber(String registrationNumber);
    }

