package com.pixelmovies.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pixelmovies.app.models.Funcion;
import java.sql.Date;


@Repository
public interface IFuncionRepository extends JpaRepository<Funcion, Integer>{

	List<Funcion> findByFechaFuncion(Date fechaFuncion);
	
}
