package com.fbfa.pitchIt.pitch.controllers;


import com.fbfa.pitchIt.pitch.models.company.Company;
import com.fbfa.pitchIt.pitch.response.ResponseOutbound;
import com.fbfa.pitchIt.pitch.services.CompanyService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
@RequestMapping(path = "/api/v1/company")

public class CompanyController {
    private final CompanyService service;

    @Autowired
    public CompanyController(CompanyService service){
        this.service = service;
    }

    @GetMapping
    public String getCompany(){
        /*
            @path /api/v1/company (GET)
         */
        ResponseOutbound responseOutbound = new ResponseOutbound(
                "",
                "",
                service.getCompanies().toString()
        );
        return responseOutbound.toString();
    }

    @PutMapping(path = "/{registration}")
    public String edit(){
        return "";
    }

    @PostMapping(path = "/{email}")
    public String registerNewCompany(@RequestBody Company company, @PathParam("email") String email){
        /*
            @path /api/v1/company (POST)
         */

        try {
            if (service.addNewCompany(company,email)){
                ResponseOutbound responseOutbound = new ResponseOutbound(
                        "Successfully added company",
                        "success",
                        company.toString()
                );
                return responseOutbound.toString();
            };
        }catch (IllegalStateException e){
            ResponseOutbound responseOutbound = new ResponseOutbound(
                    "Failed to add company (Registration number taken)",
                    "failed",
                    "{}");
            return responseOutbound.toString();
        }

        return new ResponseOutbound(
                "null",
                "null",
                "null"
        ).toString();
    }

    @DeleteMapping(path = "/{registrationNumber}")
    public String deleteCompany(@PathVariable(name = "registrationNumber") String registrationNumber){
        return service.markCompanyAsRemoved(registrationNumber);
    }
    
//    @CrossOrigin(origins = "http://localhost:8080")
//    @DeleteMapping(path = "{companySerial}")
//    public void removeCompany(@PathVariable("companySerial") String serial){
//        service.markCompanyAsRemoved(serial);
//    }

    @CrossOrigin(origins = "http://localhost:8080/")
    @GetMapping(value = "/echo",produces = MediaType.APPLICATION_JSON_VALUE)
    public String echo(){
        JSONObject response = new JSONObject();

        response.put("message","Hello There");
        return response.toString();
    }

    // TODO Update
}