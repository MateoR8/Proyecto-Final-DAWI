package com.pixelmovies.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pixelmovies.app.models.Producto;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Integer>{

}
