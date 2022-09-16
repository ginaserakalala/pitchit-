package com.fbfa.pitchIt.pitch.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor

public class ResponseOutbound implements Responses{
    private String message;
    private String status;
    private String body;



    @Override
    public String getMessage() {
        return message;
    }

    @Override
    public String getStatus() {

        return status;
    }

    @Override
    public String getBody() {
        return null;
    }

    @Override
    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String setBody(String body) {
        return null;
    }


    @Override
    public String toString() {
        return "{" +
                "\"message\":\"" + message + '\"' +
                ", \"status\":\"" + status + '\"' +
                ", \"body\":\"" + body + '\"' +
                '}';
    }
}
