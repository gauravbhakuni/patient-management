package com.pm.authservice.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class LoginRequestDTO {
    @NotBlank(message = "username is required")
    @Size(max = 20, message = "username should not exceed 20 characters")
    private String username;

    @NotBlank
    private String password;
}
