package com.pm.doctorservice.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class DoctorRequestDTO {
    @NotNull(message = "name is required")
    @Size(max = 100, message = "name should not exceed 100 characters")
    private String name;

    @NotBlank(message = "specialization is required")
    private String specialization;

    @NotBlank(message = "email is required")
    @Email(message = "Email should be valid")
    private String email;

    @NotBlank(message = "phone number is required")
    private String phone;

    @NotBlank(message = "address is required")
    private String address;
}
