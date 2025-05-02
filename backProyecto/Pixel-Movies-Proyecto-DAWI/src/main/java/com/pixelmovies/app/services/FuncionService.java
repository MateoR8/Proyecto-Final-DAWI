package com.pixelmovies.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pixelmovies.app.models.Funcion;
import com.pixelmovies.app.repositories.IFuncionRepository;

@Service
public class FuncionService {

	
	@Autowired
	private IFuncionRepository funcionRepo;
	
	public List<Funcion> listarFunciones() {
		return funcionRepo.findAll();
	}

	public Funcion obtenerFuncionPorId(int id) {
		return funcionRepo.findById(id).orElse(null);
	}

	public Funcion agregarFuncion(Funcion funcion) {
		return funcionRepo.save(funcion);
	}

	public void eliminarFuncion(int id) {
		funcionRepo.deleteById(id);
	}

	public Funcion actualizarFuncion(Funcion funcion) {
		return funcionRepo.save(funcion);
	}	
}
