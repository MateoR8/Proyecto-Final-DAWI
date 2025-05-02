package com.pixelmovies.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pixelmovies.app.models.Sala;

@Repository
public interface ISalaRepository extends JpaRepository<Sala, Integer>{
}
