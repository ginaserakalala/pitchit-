package com.fbfa.pitchIt.pitch.services;

import com.fbfa.pitchIt.pitch.models.company.Company;
import com.fbfa.pitchIt.pitch.repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {
    private final CompanyRepository companyRepository;

    @Autowired
    public CompanyService(CompanyRepository companyRepository){
        this.companyRepository = companyRepository;
    }

    public List<Company> getCompanies(){
       /*
       Returns the entirety of the Companies in the Database
        */
        return companyRepository.findAll();
    }


    public Boolean addNewCompany(Company company,String email) {
        /*
        @params     company     The company object with all its details and data

        Summary
            Writes the Company details to the Pitch DataBase
         */

        Optional<Company> companyByRegistrationNumber = companyRepository.findCompanyByRegistrationNumber(company.getRegistrationNumber());
        if (companyByRegistrationNumber.isPresent()){
            throw new IllegalStateException("Registration Number Taken");

        }
        company.setDate(LocalDate.now());


        System.out.println(company);

        companyRepository.save(company);
        return true;
    }

    public String markCompanyAsRemoved(String registration){
        /*
        @params      registraion    Company registration number

            Summary:
                Removes a company from the Database

         */
        System.out.println(registration);
        Optional<Company> companyOptional = companyRepository.findCompanyByRegistrationNumber(registration);

        if (!companyOptional.isPresent()){
            return new IllegalStateException("[{\"message\":\"Registraion Number "+registration+" not Found"+"\"}]").getMessage();
        }

        companyRepository.delete(companyOptional.get());
        return "[{\"message\":\"Deleted company with registration number: "+registration+"\"}]";
    }

    
}