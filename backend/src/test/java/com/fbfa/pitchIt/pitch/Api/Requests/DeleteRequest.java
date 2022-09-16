package com.fbfa.pitchIt.pitch.Api.Requests;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.json.JSONObject;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class DeleteRequest {

    public void deleteFromServer() throws UnirestException {
        HttpResponse<JsonNode> jsonResponse
                = Unirest.delete("http://localhost:8080/api/v1/company/123456789").asJson();

        assertEquals(200,jsonResponse.getStatus());
    }
}
