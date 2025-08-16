package com.pm.doctorservice.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.*;

import java.util.UUID;

@Entity
@Data
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotNull
    private String name;

    @NotNull
    private String specialization;

    @NotNull
    @Email
    @Column(unique = true)
    private String email;

    @Pattern(regexp = "^\\+?[0-9]{10,15}$", message = "Invalid phone number")
    @Column(unique = true)
    private String phone;

    @NotNull
    private String address;

    @NotNull
    private boolean active;

    @PrePersist
    public void prePersist() {
        this.active = true; // Default new doctors to active
    }
}
