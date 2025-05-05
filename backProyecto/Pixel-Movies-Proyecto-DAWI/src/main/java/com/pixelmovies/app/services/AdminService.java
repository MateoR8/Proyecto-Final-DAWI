package com.pixelmovies.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pixelmovies.app.models.Administrador;
import com.pixelmovies.app.models.Sala;
import com.pixelmovies.app.repositories.IAdminRepository;

@Service
public class AdminService {
	
	@Autowired
	private IAdminRepository adminRepo;
	
	public Administrador obtenerAdministrador(String nombreUsuario, String contrasenia) {
		return adminRepo.findByNombreUsuarioAndContrasenia(nombreUsuario, contrasenia);
	}

	public Administrador agregarAdmin(Administrador administrador) {
		return adminRepo.save(administrador);
	}
}