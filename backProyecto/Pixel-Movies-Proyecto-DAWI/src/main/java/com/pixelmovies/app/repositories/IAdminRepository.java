package com.pixelmovies.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pixelmovies.app.models.Administrador;

@Repository
public interface IAdminRepository extends JpaRepository<Administrador, Integer>{
	Administrador findByNombreUsuarioAndContrasenia(String nombreUsuario, String contrasenia);
}
