package com.fbfa.pitchIt.pitch.Api;

import com.fbfa.pitchIt.pitch.Api.Requests.DeleteRequest;
import com.fbfa.pitchIt.pitch.models.company.Company;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.json.JSONObject;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CompanyControllerTest {
    Company company;

    public Boolean isNode(String json){
        try{
            new JSONObject(json);
            return true;
        }catch (Exception e){
            System.out.println(e.getMessage());
            return false;

        }
    }

    @BeforeEach
    void setUp() throws UnirestException {
//        this.company = new Company(
//                "Waxes27 PTY LTD",
//                "123456789",
//                "United Kingdom"
//        );

//        new GetRequest();
    }

    @AfterEach
    void tearDown() throws UnirestException {
        new DeleteRequest().deleteFromServer();
    }



    @Test
    void echo() {
    }

    @Test
    public void getCompanies() throws Exception {
        JSONObject data = new JSONObject();
        data.put("companyName", "Sony Entertainment");
        data.put("registrationNumber", "123456789");
        data.put("country", "South Africa");

        HttpResponse<JsonNode> jsonResponse;
        jsonResponse = Unirest.post("http://localhost:8080/api/v1/company")
                .header("content-type", "application/json")
                .header("accept", "application/json")
                .body(data).asJson();


        jsonResponse
                = Unirest.get("http://localhost:8080/api/v1/company")
                .header("accept", "application/json").asJson();

        assertNotNull(jsonResponse.getBody());
        assertTrue(isNode(jsonResponse.getBody().getArray().get(0).toString()));
        assertEquals(200, jsonResponse.getStatus());

        JSONObject node = new JSONObject(jsonResponse.getBody().getArray().get(0).toString());
        assertEquals("123456789",node.get("registrationNumber"));

    }


    @Test
    void registerNewCompany() throws UnirestException {
        HttpResponse<JsonNode> jsonResponse;
        JSONObject data = new JSONObject();
        data.put("companyName", "Sony Entertainment");
        data.put("registrationNumber", "123456789");
        data.put("country", "South Africa");


        jsonResponse = Unirest.post("http://localhost:8080/api/v1/company")
                .header("content-type", "application/json")
                .header("accept", "application/json")
                .body(data).asJson();


        assertNotNull(jsonResponse.getBody().getArray().get(0));
        assertEquals("success",jsonResponse.getBody().getObject().get("status"),jsonResponse.getBody().toString());


        jsonResponse = Unirest.post("http://localhost:8080/api/v1/company")
                .header("content-type", "application/json")
                .header("accept", "application/json")
                .body(data).asJson();


        assertEquals("failed",jsonResponse.getBody().getObject().get("status"),jsonResponse.getBody().toString());



    }

    @Test
    void deleteCompany() {
    }
}