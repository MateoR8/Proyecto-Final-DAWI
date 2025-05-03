package com.pixelmovies.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pixelmovies.app.models.Producto;
import com.pixelmovies.app.repositories.IProductoRepository;

@Service
public class ProductoService {

	@Autowired
	private IProductoRepository repoProd;
	
	public List<Producto> listarProductos() {
		return repoProd.findAll();
	}

	public Producto obtenerProductoPorId(int id) {
		return repoProd.findById(id).orElse(null);
	}

	public Producto agregarProducto(Producto prod) {
		return repoProd.save(prod);
	}

	public void eliminarProducto(int id) {
		repoProd.deleteById(id);
	}

	public Producto actualizarProducto(Producto prod) {
		return repoProd.save(prod);
	}	
}
