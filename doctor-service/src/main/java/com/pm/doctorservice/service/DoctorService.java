package com.pm.doctorservice.service;

import com.pm.doctorservice.dto.DoctorRequestDTO;
import com.pm.doctorservice.dto.DoctorResponseDTO;
import com.pm.doctorservice.exception.DoctorNotFoundException;
import com.pm.doctorservice.exception.EmailAlreadyExistsException;
import com.pm.doctorservice.mapper.DoctorMapper;
import com.pm.doctorservice.model.Doctor;
import com.pm.doctorservice.repository.DoctorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class DoctorService {
    private final DoctorRepository doctorRepository;

    public DoctorService(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    public List<DoctorResponseDTO> getDoctors() {
        List<Doctor> doctors = doctorRepository.findAll();

        return doctors.stream().map(DoctorMapper::toDto).toList();
    }

    public DoctorResponseDTO getDoctor(UUID id) {
        Doctor doctor = doctorRepository.findById(id).orElse(null);

        assert doctor != null;
        return DoctorMapper.toDto(doctor);
    }

    public DoctorResponseDTO createDoctor(DoctorRequestDTO doctorRequestDTO) {
        if(doctorRepository.existsByEmail(doctorRequestDTO.getEmail())) {
            throw new EmailAlreadyExistsException("A doctor with this email ( " + doctorRequestDTO.getEmail() + " ) already exists");
        }

        Doctor newDoctor = doctorRepository.save(DoctorMapper.toModel(doctorRequestDTO));

        return DoctorMapper.toDto(newDoctor);
    }

    public DoctorResponseDTO updateDoctor(UUID id, DoctorRequestDTO doctorRequestDTO) {
        Doctor doctor = doctorRepository.findById(id).orElseThrow(() -> new DoctorNotFoundException("Doctor with this id (" + id + ") not found"));

        if(doctorRepository.exitsByEmailAndIdNot(doctorRequestDTO.getEmail(), id))
        {
            throw new EmailAlreadyExistsException("Doctor with this email ( " + doctorRequestDTO.getEmail() + " ) already exists");
        }

        doctor.setName(doctorRequestDTO.getName());
        doctor.setSpecialization(doctorRequestDTO.getSpecialization());
        doctor.setAddress(doctorRequestDTO.getAddress());
        doctor.setPhone(doctorRequestDTO.getPhone());
        doctor.setEmail(doctorRequestDTO.getEmail());

        Doctor newDoctor = doctorRepository.save(doctor);
        return DoctorMapper.toDto(newDoctor);
    }

    public void deleteDoctor(UUID id) {doctorRepository.deleteById(id);}
}
