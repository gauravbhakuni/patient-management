package com.pm.doctorservice.mapper;

import com.pm.doctorservice.dto.DoctorRequestDTO;
import com.pm.doctorservice.dto.DoctorResponseDTO;
import com.pm.doctorservice.model.Doctor;

public class DoctorMapper {
    public static DoctorResponseDTO toDto(Doctor doctor) {
        DoctorResponseDTO doctorResponseDTO = new DoctorResponseDTO();

        doctorResponseDTO.setId(String.valueOf(doctor.getId()));
        doctorResponseDTO.setName(doctor.getName());
        doctorResponseDTO.setSpecialization(doctor.getSpecialization());
        doctorResponseDTO.setEmail(doctor.getEmail());
        doctorResponseDTO.setPhone(doctor.getPhone());
        doctorResponseDTO.setAddress(doctor.getAddress());
        doctorResponseDTO.setActive(doctor.isActive() ? "Active" : "Inactive");

        return doctorResponseDTO;
    }

    public static Doctor toModel(DoctorRequestDTO doctorRequestDTO) {
        Doctor doctor = new Doctor();

        doctor.setName(doctorRequestDTO.getName());
        doctor.setSpecialization(doctorRequestDTO.getSpecialization());
        doctor.setEmail(doctorRequestDTO.getEmail());
        doctor.setPhone(doctorRequestDTO.getPhone());
        doctor.setAddress(doctorRequestDTO.getAddress());

        return doctor;
    }
}
