package com.fbfa.pitchIt.pitch.Api.Requests;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.mashape.unirest.request.body.RequestBodyEntity;
import org.json.JSONObject;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class GetRequest {

    public GetRequest() throws UnirestException {
        postToServer();
    }

    public void postToServer() throws UnirestException {
        RequestBodyEntity jsonResponse;
        JSONObject data = new JSONObject();
        data.put("companyName", "Sony Entertainment");
        data.put("registrationNumber", "123456789");
        data.put("country", "South Africa");


        Unirest.post("http://localhost:8080/api/v1/company")
                .header("content-type", "application/json")
                .header("accept", "application/json")
                .body(data).asJson();
    }
}
