package com.pm.doctorservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class DoctorResponseDTO {
    private String id;
    private String name;
    private String specialization;
    private String email;
    private String phone;
    private String address;
    private String active;
}
