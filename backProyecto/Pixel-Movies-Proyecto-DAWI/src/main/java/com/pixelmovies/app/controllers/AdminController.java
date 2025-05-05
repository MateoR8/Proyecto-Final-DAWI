package com.pixelmovies.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pixelmovies.app.models.Administrador;
import com.pixelmovies.app.services.AdminService;

@RestController
@RequestMapping("/api/acceso")
@CrossOrigin(origins = "http://localhost:4200") 

public class AdminController {

	@Autowired
	private AdminService service;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Administrador request) {
		Administrador admin = service.obtenerAdministrador(request.getNombreUsuario(), request.getContrasenia());
		if (admin == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(admin);
	}
	
	@PostMapping()
	public ResponseEntity<Administrador> agregarAdministrador(@RequestBody Administrador administrador) {
		try {
			Administrador nuevoAdmin = service.agregarAdmin(administrador);
			return ResponseEntity.status(HttpStatus.CREATED).body(nuevoAdmin);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}
	
}
