package com.pm.authservice.controller;

import com.pm.authservice.dto.LoginRequestDTO;
import com.pm.authservice.dto.LoginResponseDTO;
import com.pm.authservice.model.User;
import com.pm.authservice.repository.UserRepository;
import com.pm.authservice.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;
    private final UserRepository userRepo;

    public AuthController(AuthService authService, UserRepository userRepo) {
        this.authService = authService;
        this.userRepo = userRepo;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@Valid @RequestBody LoginRequestDTO req) {
        String token = authService.login(req);
        // return role also for convenience (extracted by token generator)
        String role = userRepo.findByUsername(req.getUsername()).map(User::getRole).orElse("");
        return ResponseEntity.ok(new LoginResponseDTO(token, role));
    }

    @GetMapping("/me")
    public ResponseEntity<Map<String, String>> getCurrentUser(
            @RequestHeader("X-Authenticated-User") String username,
            @RequestHeader("X-Authenticated-Role") String role) {
        return ResponseEntity.ok(Map.of(
                "username", username,
                "role", role
        ));
    }

}
